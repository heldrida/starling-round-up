import { NUMBER_OF_DAYS_WEEK, APP_ENDPOINTS, MONTH_NAMES } from '../Utils/constants'
import axios from 'axios'

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

const get = axios.get

const getAccounts = async () => {
  return await get(APP_ENDPOINTS.accounts)
}

const getFeedItems = async () => {
  return await get(APP_ENDPOINTS.feedItems)
}

const getSavingsGoals = async () => {
  return await get(APP_ENDPOINTS.savingGoals)
}

const converMinorUnitToTwoDecimal = (minorUnits: number): number => minorUnits / 100

const roundUpCurrency = (minorUnits: number) => {
  const minorUnitsParsed = parseFloat(""+minorUnits).toFixed(2)
  const decimalPart = +("" + minorUnitsParsed).split('.')[1]
  let computed = decimalPart > 0 ? (1 - (decimalPart/100)) : 0
  return computed
}

const listOfValuesComputeWith = (list: number[], cb: (value: number) => number): number => list.reduce((acc, curr) => acc += cb(curr), 0)

const generateWeekNameByStarEndDates = (startDate: Date, endDate: Date): string => {
  const monthName = MONTH_NAMES[startDate.getMonth()]
  const named = `${startDate.getFullYear()}_${monthName}_week_${startDate.getDate()}_to_${endDate.getDate()}`
  return named
}

export {
  getTransactionDate,
  getStarEndOfWeekDaysByTransactionTime,
  getStartDateFromTransactionDate,
  getEndDateFromTransactionDate,
  getAccounts,
  getFeedItems,
  converMinorUnitToTwoDecimal,
  roundUpCurrency,
  listOfValuesComputeWith,
  generateWeekNameByStarEndDates
}