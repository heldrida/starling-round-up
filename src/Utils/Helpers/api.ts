import { APP_ENDPOINTS, DEFAULT_SERVER_PORT } from '../constants'
import axios from 'axios'
import { IGetAccountsResponseData } from '../Types'

const get = axios.get
const put = axios.put

const getProxyServerLocation = (): string => {
  const url = (typeof window !== 'undefined' &&
  `${window.location.protocol}//${window.location.hostname}:${DEFAULT_SERVER_PORT}`) || ''
  return url
}

const httpHandler = async (action: () => Promise<any>, errorHandler: (e: any) => void) => {
  try {
    const { data } = await action()
    return data
  } catch (err) {
    typeof errorHandler === 'function' &&
    errorHandler(err)
  }
}

const proxyServerLocation = getProxyServerLocation()

const getAccounts = async (): Promise<IGetAccountsResponseData> => {
  const targetUrl = `${proxyServerLocation}${APP_ENDPOINTS.accounts}`
  return await (get(targetUrl))
}

const getFeedItems = async () => {
  const targetUrl = `${proxyServerLocation}${APP_ENDPOINTS.feedItems}`
  return await get(targetUrl)
}

const getSavingsGoals = async () => {
  const targetUrl = `${proxyServerLocation}${APP_ENDPOINTS.savingGoals}`
  return await get(targetUrl)
}

const putSavingGoals = async () => {
  const targetUrl = `${proxyServerLocation}${APP_ENDPOINTS.putSavingsGoals}`
  return await put(targetUrl)
}

export {
  httpHandler,
  getAccounts,
  getFeedItems,
  getSavingsGoals,
  putSavingGoals
}