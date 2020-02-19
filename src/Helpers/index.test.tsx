import { mockFeedSinceDateResponse } from '../Mocks/data'
import { getTransactionDate, getStarEndOfWeekDaysByTransactionTime, getStartDateFromTransactionDate, getEndDateFromTransactionDate } from './index'

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
})