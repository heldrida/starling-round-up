import { mockFeedSinceDateResponse, mockAccountResponse } from '../Mocks/data'
import { getTransactionDate,
         getStarEndOfWeekDaysByTransactionTime,
         getStartDateFromTransactionDate,
         getEndDateFromTransactionDate,
         getAccounts,
         getFeedItems,
         converMinorUnitToTwoDecimal,
         roundUpCurrency,
         listOfValuesComputeWith,
         generateWeekNameByStarEndDates } from './index'
import axios from 'axios'
import { APP_ENDPOINTS } from '../Utils/constants'

jest.mock('axios')

describe('Customer service', () => {
  it('should created a new date object from transaction time', () => {
    const { transactionTime } = mockFeedSinceDateResponse.feedItems[0]
    const transactionDate: Date = getTransactionDate(transactionTime)
    expect(transactionDate instanceof Date).toBe(true)
    expect(typeof transactionDate.getDay).toBe('function')
    expect(typeof transactionDate.getFullYear).toBe('function')
  })

  it('should find the weeks starting and final dates from a given date', () => {
    const { transactionTime } = mockFeedSinceDateResponse.feedItems[0]
    const transactionDate: Date = getTransactionDate(transactionTime)
    const dayOfTheWeek = transactionDate.getDay()
    const { startDate, endDate } = getStarEndOfWeekDaysByTransactionTime(transactionTime)

    const expectedWeekStartDate = getStartDateFromTransactionDate(transactionDate, dayOfTheWeek)
    const expectedWeekEndDate = getEndDateFromTransactionDate(transactionDate, dayOfTheWeek)

    expect(startDate.getDate()).toBe(expectedWeekStartDate.getDate())
    expect(endDate.getDate()).toBe(expectedWeekEndDate.getDate())
  })

  it('should generate the correct week names', () => {
    const transactionTimes = ['2020-01-02T17:33:28.729Z', '2020-02-05T10:30:00.729Z', '2019-12-05T19:45:56.729Z']
    const expectedNames = ['december_week_29_to_5', 'february_week_2_to_9', 'december_week_1_to_8']
    transactionTimes.forEach((transactionTime, index) => {
      const { startDate, endDate } = getStarEndOfWeekDaysByTransactionTime(transactionTime)
      const name = generateWeekNameByStarEndDates(startDate, endDate)
      expect(name).toBe(expectedNames[index])
    })
  })

  it('should group all the transactions made by groups of weeks', () => {
    const feedItems = mockFeedSinceDateResponse['feedItems']
    const result = feedItems.reduce((acc, curr) => {
      const { transactionTime } = curr
      const { startDate, endDate } = getStarEndOfWeekDaysByTransactionTime(transactionTime)
      const hash = generateWeekNameByStarEndDates(startDate, endDate)
      if (!acc.hasOwnProperty(hash)) {
        (acc as any)[hash] = []
      }
      (acc as any)[hash].push(curr)
      return acc
    }, {})
    // console.log(result)
  })  

  it('should format the amount provided to two decimal currency that is GBP', () => {
    const data = [{
      minorUnit: 2050,
      expectedCurrency: 20.50
    }, {
      minorUnit: 1795,
      expectedCurrency: 17.95
    }, {
      minorUnit: 60,
      expectedCurrency: 0.60
    }, {
      minorUnit: 99999,
      expectedCurrency: 999.99
    }]
    data.forEach(data => expect(converMinorUnitToTwoDecimal(data.minorUnit)).toBe(data.expectedCurrency))
  })
})

it('should round-up to the closest pound', () => {
  const data = [{
    currency: 4.35,
    expected: 0.65
  }, {
    currency: 5.20,
    expected: 0.80
  }, {
    currency: 0.87,
    expected: 0.13
  }]
  data.forEach(data => expect(roundUpCurrency(data.currency)).toBe(data.expected))
})

it('should sum all the computed rounded-up values in a list', () => {
  const data = [{
    currency: 4.35,
    expected: 0.65
  }, {
    currency: 5.20,
    expected: 0.80
  }, {
    currency: 0.87,
    expected: 0.13
  }]
  const list = data.map(data => data.currency)
  const total = listOfValuesComputeWith(list, roundUpCurrency)
  const expectedSum = 1.58
  expect(total).toBe(expectedSum)
})

describe('API service', () => {
  it('should fetch data from the account endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockAccountResponse.accounts[0]))
    await expect(getAccounts()).resolves.toEqual(mockAccountResponse.accounts[0])
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.accounts
    )
  })

  it('should fetch data from the feed items endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockFeedSinceDateResponse.feedItems))
    await expect(getFeedItems()).resolves.toEqual(mockFeedSinceDateResponse.feedItems)
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.feedItems
    )
  })
})