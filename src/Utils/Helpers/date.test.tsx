import { mockFeedSinceDateResponse } from '../Mocks/data'
import { getTransactionDate,
  getStarEndOfWeekDaysByTransactionTime,
  getStartDateFromTransactionDate,
  getEndDateFromTransactionDate,
  generateWeekNameByStarEndDates,
  groupTransactionsByWeeks } from './index'
  
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
  const expectedNames = ['2019_december_week_29_to_5', '2020_february_week_2_to_9', '2019_december_week_1_to_8']
  transactionTimes.forEach((transactionTime, index) => {
    const { startDate, endDate } = getStarEndOfWeekDaysByTransactionTime(transactionTime)
    const name = generateWeekNameByStarEndDates(startDate, endDate)
    expect(name).toBe(expectedNames[index])
  })
})

it('should group all the transactions made by groups of weeks', () => {
  const feedItems = mockFeedSinceDateResponse['feedItems']
  const result = groupTransactionsByWeeks(feedItems)
  const expected = ['2019_december_week_29_to_5', '2020_january_week_5_to_12', '2020_february_week_2_to_9']
  Object.keys(result).forEach(name => expect(expected.includes(name)).toBe(true))
})

