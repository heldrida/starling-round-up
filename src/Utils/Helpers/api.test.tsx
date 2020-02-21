import { APP_ENDPOINTS, DEFAULT_SERVER_PORT } from '../constants'
import { mockFeedSinceDateResponse,
  mockAccountResponse,
  mockSavingGoalsList,
  mockPutSavingGoalsResponse,
  mockPutSavingGoalsResponseError } from '../Mocks/data'
import {
  getAccounts,
  getFeedItems,
  getSavingsGoals,
  putSavingGoals  } from './index'
import axios from 'axios'
import { IParamPutSavingGoals } from '../Types'

jest.mock('axios')

describe('API service', () => {
  it('should fetch data from the account endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockAccountResponse.accounts[0]))
    await expect(getAccounts()).resolves.toEqual(mockAccountResponse.accounts[0])
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:${DEFAULT_SERVER_PORT}${APP_ENDPOINTS.accounts}`
    )
  })

  it('should fetch data from the feed items endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockFeedSinceDateResponse.feedItems))
    await expect(getFeedItems('$accountUid', '$categoryUid', 'xxxx')).resolves.toEqual(mockFeedSinceDateResponse.feedItems)
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:${DEFAULT_SERVER_PORT}${APP_ENDPOINTS.feedItems}?changesSince=xxxx`
    )
  })

  it('should fetch data from the get save goals endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockSavingGoalsList.savingsGoalList))
    await expect(getSavingsGoals()).resolves.toEqual(mockSavingGoalsList.savingsGoalList)
    expect(axios.get).toHaveBeenCalledWith(
      `http://localhost:${DEFAULT_SERVER_PORT}${APP_ENDPOINTS.savingGoals}`
    )
  })

  it('should put data to the get save goals endpoint', async () => {
    const params: IParamPutSavingGoals = {
      'name': 'foobar',
      'currency': 'GDP',
      'target': {
        'currency': 'GDP',
        'minorUnits': 100
      }
    }
    ;(axios as any).put.mockImplementationOnce(() => Promise.resolve(mockPutSavingGoalsResponse))
    await expect(putSavingGoals('$accountUid', params)).resolves.toEqual(mockPutSavingGoalsResponse)
    expect(axios.put).toHaveBeenCalledWith(
      `http://localhost:${DEFAULT_SERVER_PORT}${APP_ENDPOINTS.putSavingsGoals}`,
      params
    )
  })
})