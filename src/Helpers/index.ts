import { NUMBER_OF_DAYS_WEEK } from '../Utils/constants'

const getComputedDate = (date: Date, days: number): Date => {
  const dateCloned = new Date(date.valueOf())
  dateCloned.setDate(dateCloned.getDate() + days)
  return dateCloned
}

const getStarEndOfWeekDaysByTransactionTime = (transactionTime: string): { startDate: Date, endDate: Date } => {
  const transactionDate: Date = new Date(transactionTime)
  const dayOfTheWeek: number = transactionDate.getDay()
  const startDate: Date = getComputedDate(transactionDate, -dayOfTheWeek)
  const endDate: Date = getComputedDate(transactionDate, +(NUMBER_OF_DAYS_WEEK - dayOfTheWeek))
  return { startDate, endDate }
}

const getTransactionDate = (transactionTime: string): Date => {
  return new Date(transactionTime)
}

export {
  getTransactionDate,
  getStarEndOfWeekDaysByTransactionTime,
  getComputedDate
}