import { APP_ENDPOINTS, DEFAULT_SERVER_PORT } from '../constants'
import axios from 'axios'
import { IGetAccountsResponseData, IParamPutSavingGoals } from '../Types'

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

const getFeedItems = async (accountUid: string, categoryUid: string, changesSince: string) => {
  let path = APP_ENDPOINTS.feedItems.replace('$accountUid', accountUid)
  path = path.replace('$categoryUid', categoryUid)
  const targetUrl = `${proxyServerLocation}${path}?changesSince=${changesSince}`
  return await get(targetUrl)
}

const getSavingsGoals = async () => {
  const targetUrl = `${proxyServerLocation}${APP_ENDPOINTS.savingGoals}`
  return await get(targetUrl)
}

const putSavingGoals = async (accountUid: string, data: IParamPutSavingGoals) => {
  const path = APP_ENDPOINTS.putSavingsGoals.replace('$accountUid', accountUid)
  const targetUrl = `${proxyServerLocation}${path}`
  return await put(targetUrl, data)
}

const createSavingGoalsPutData = (name: string, currency: string, minorUnits: number, base64EncodedPhoto?: string) => {
  return {
    name,
    currency,
    'target': {
      currency,
      minorUnits
    },
    base64EncodedPhoto
  }
}

export {
  httpHandler,
  getAccounts,
  getFeedItems,
  getSavingsGoals,
  putSavingGoals,
  createSavingGoalsPutData
}