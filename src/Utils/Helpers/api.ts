import { APP_ENDPOINTS } from '../constants'
import axios from 'axios'


const get = axios.get
const put = axios.put

const httpHandler = async (action: () => Promise<any>, errorHandler: (e: any) => void) => {
  try {
    const { data } = await action()
    return data
  } catch (err) {
    typeof errorHandler === 'function' &&
    errorHandler(err)
  }
}

const getAccounts = async () => {
  return await (get(APP_ENDPOINTS.accounts))
}

const getFeedItems = async () => {
  return await get(APP_ENDPOINTS.feedItems)
}

const getSavingsGoals = async () => {
  return await get(APP_ENDPOINTS.savingGoals)
}

const putSavingGoals = async () => {
  return await put(APP_ENDPOINTS.putSavingsGoals)
}

export {
  httpHandler,
  getAccounts,
  getFeedItems,
  getSavingsGoals,
  putSavingGoals
}