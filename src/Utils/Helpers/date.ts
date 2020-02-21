import { NUMBER_OF_DAYS_WEEK, MONTH_NAMES } from '../constants'
import { IFeedItemsList, ITransactionsByWeek } from '../Types'

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

const groupTransactionsByWeeks = (feedItemsList: IFeedItemsList[]): ITransactionsByWeek => {
  const result = feedItemsList.reduce((acc, curr): ITransactionsByWeek => {
                    const { transactionTime } = curr
                    const { startDate, endDate } = getStarEndOfWeekDaysByTransactionTime(transactionTime)
                    const hash = generateWeekNameByStarEndDates(startDate, endDate)
                    if (!acc.hasOwnProperty(hash)) {
                      (acc as any)[hash] = []
                    }
                    ;(acc as any)[hash].push(curr)
                    return acc
                  }, {})
  return result
}

const getTransactionsWeekByCashflow = (transactionsByWeek: any, cashflow: string) => {
  const transactionWeekNames = transactionsByWeek && Object.keys(transactionsByWeek)
  const list = transactionsByWeek &&
               transactionWeekNames &&
               transactionWeekNames.reduce((acc: any, curr) => {
                  const filtered = transactionsByWeek[curr].filter((data: { [name: string]: string }) => data?.direction === cashflow)
                  acc[curr] = filtered
                  return acc
               }, {})
  return list
}

export {
  generateWeekNameByStarEndDates,
  getTransactionDate,
  getStarEndOfWeekDaysByTransactionTime,
  getStartDateFromTransactionDate,
  getEndDateFromTransactionDate,
  groupTransactionsByWeeks,
  getTransactionsWeekByCashflow
}