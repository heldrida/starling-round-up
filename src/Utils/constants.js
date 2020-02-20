const NUMBER_OF_DAYS_WEEK = 7
const APP_ENDPOINTS = {
  accounts: '/api/v2/accounts',
  feedItems: '/api/v2/feed/account/$accountUid/category/$categoryUid'
}
const DEFAULT_SERVER_PORT = 8081
const RESOURCES_ENDPOINT = 'https://api-sandbox.starlingbank.com/'

module.exports = {
  NUMBER_OF_DAYS_WEEK,
  APP_ENDPOINTS,
  DEFAULT_SERVER_PORT,
  RESOURCES_ENDPOINT
}