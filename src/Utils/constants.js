const NUMBER_OF_DAYS_WEEK = 7
const APP_ENDPOINTS = {
  accounts: '/api/v2/accounts',
  feedItems: '/api/v2/feed/account/$accountUid/category/$categoryUid',
  savingGoals: '/api/v2/account/$accountUid/savings-goals',
  putSavingsGoals: '/api/v2/account/$accountUid/savings-goals'
}
const DEFAULT_SERVER_PORT = 8081
const RESOURCES_ENDPOINT = 'https://api-sandbox.starlingbank.com/'

const MONTH_NAMES = ["january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december"]

const TRANSACTION_TABLE_DATA_NAMES = ['minorUnits', 'direction', 'status', 'transactionTime', 'country']

const CASH_DIRECTION_OUT = 'OUT'

module.exports = {
  NUMBER_OF_DAYS_WEEK,
  APP_ENDPOINTS,
  DEFAULT_SERVER_PORT,
  RESOURCES_ENDPOINT,
  MONTH_NAMES,
  TRANSACTION_TABLE_DATA_NAMES,
  CASH_DIRECTION_OUT
}