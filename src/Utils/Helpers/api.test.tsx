import { APP_ENDPOINTS } from '../constants'
import { mockFeedSinceDateResponse,
  mockAccountResponse,
  mockSavingGoalsList,
  mockPutSavingGoalsResponse,
  mockPutSavingGoalsResponseError } from '../../Mocks/data'
import {
  getAccounts,
  getFeedItems,
  getSavingsGoals,
  putSavingGoals,
  httpHandler } from './index'
import axios from 'axios'

jest.mock('axios')

describe('API service', () => {
  it('should fetch data from the account endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockAccountResponse.accounts[0]))
    await expect(getAccounts()).resolves.toEqual(mockAccountResponse.accounts[0])
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.accounts
    )
  })

  it('should fetch data from the feed items endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockFeedSinceDateResponse.feedItems))
    await expect(getFeedItems()).resolves.toEqual(mockFeedSinceDateResponse.feedItems)
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.feedItems
    )
  })

  it('should fetch data from the get save goals endpoint', async () => {
    (axios as any).get.mockImplementationOnce(() => Promise.resolve(mockSavingGoalsList.savingsGoalList))
    await expect(getSavingsGoals()).resolves.toEqual(mockSavingGoalsList.savingsGoalList)
    expect(axios.get).toHaveBeenCalledWith(
      APP_ENDPOINTS.savingGoals
    )
  })

  it('should put data to the get save goals endpoint', async () => {
    (axios as any).put.mockImplementationOnce(() => Promise.resolve(mockPutSavingGoalsResponse))
    await expect(putSavingGoals()).resolves.toEqual(mockPutSavingGoalsResponse)
    expect(axios.put).toHaveBeenCalledWith(
      APP_ENDPOINTS.putSavingsGoals
    )
  })

  it('should the put save goals endpoint fail throw exception', async () => {
    (axios as any).put.mockImplementationOnce(() => Promise.reject(mockPutSavingGoalsResponseError))
    const errorHandler = (e: any) => {
      expect(e).toEqual(mockPutSavingGoalsResponseError)
    }
    httpHandler(putSavingGoals, errorHandler)
  })
})