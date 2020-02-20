import { NUMBER_OF_DAYS_WEEK, MONTH_NAMES } from '../Utils/constants'

const getComputedDate = (date: Date, days: number): Date => {
  const dateCloned = new Date(date.valueOf())
  dateCloned.setDate(dateCloned.getDate() + days)
  return dateCloned
}

const getStartDateFromTransactionDate = (transactionDate: Date, dayOfTheWeek: number) => getComputedDate(transactionDate, -dayOfTheWeek)

const getEndDateFromTransactionDate = (transactionDate: Date, dayOfTheWeek: number) => getComputedDate(transactionDate, +(NUMBER_OF_DAYS_WEEK - dayOfTheWeek))

const getStarEndOfWeekDaysByTransactionTime = (transactionTime: string): { startDate: Date, endDate: Date } => {
  const transactionDate: Date = new Date(transactionTime)
  const dayOfTheWeek: number = transactionDate.getDay()
  const startDate: Date = getStartDateFromTransactionDate(transactionDate, dayOfTheWeek)
  const endDate: Date = getEndDateFromTransactionDate(transactionDate, dayOfTheWeek)
  return { startDate, endDate }
}

const getTransactionDate = (transactionTime: string): Date => {
  return new Date(transactionTime)
}

const generateWeekNameByStarEndDates = (startDate: Date, endDate: Date): string => {
  const monthName = MONTH_NAMES[startDate.getMonth()]
  const named = `${startDate.getFullYear()}_${monthName}_week_${startDate.getDate()}_to_${endDate.getDate()}`
  return named
}

export {
  generateWeekNameByStarEndDates,
  getTransactionDate,
  getStarEndOfWeekDaysByTransactionTime,
  getStartDateFromTransactionDate,
  getEndDateFromTransactionDate
}