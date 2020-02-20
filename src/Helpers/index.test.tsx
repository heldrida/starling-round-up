import { mockFeedSinceDateResponse, mockAccountResponse } from '../Mocks/data'
import { getTransactionDate,
         getStarEndOfWeekDaysByTransactionTime,
         getStartDateFromTransactionDate,
         getEndDateFromTransactionDate,
         getAccounts,
         getFeedItems,
         converMinorUnitToTwoDecimal } from './index'
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

describe('API service', () => {
  it('should fetch data from the account endpoint', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockAccountResponse.accounts[0]))
    await expect(getAccounts()).resolves.toEqual(mockAccountResponse.accounts[0])
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.accounts
    )
  })

  it('should fetch data from the feed items endpoint', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(mockFeedSinceDateResponse.feedItems))
    await expect(getFeedItems()).resolves.toEqual(mockFeedSinceDateResponse.feedItems)
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.feedItems
    )
  })
})