import React, { useState, useEffect } from 'react'
import { getFeedItems } from '../../Utils/Helpers/api'
import { groupTransactionsByWeeks } from '../../Utils/Helpers/date'
import { ICashoutTransactionWeekList, IAccountResponseError, ITransactionsByWeek } from '../../Utils/Types'
import { TRANSACTION_TABLE_DATA_NAMES, CASH_DIRECTION_OUT } from '../../Utils/constants'
import { TransactionsByWeekContainer } from './styled'
import { getTableDataNameByType, converMinorUnitToTwoDecimal, traillingZero, getTableDateByISO, getTransactionsWeekByCashflow } from '../../Utils/Helpers'
import RoundUpBar from '../RoundUpBar'
import Loading from '../Loading'

const TransactionFeed = ({selectedAccountUid, categoryId, changesSince}: {selectedAccountUid: string, categoryId: string, changesSince: string}) => {
  const [error, setError] = useState<IAccountResponseError | undefined>(undefined)
  const [transactionsByWeek, setTransactionsByWeek] = useState<ITransactionsByWeek | undefined>(undefined)
  const [cashOutTransactionWeekList, setCashOutTransactionWeekList] = useState<ICashoutTransactionWeekList | undefined>(undefined)

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await getFeedItems(selectedAccountUid, categoryId, changesSince)
        const transactionsByWeek = data &&
                                   data?.feedItems &&
                                   groupTransactionsByWeeks(data.feedItems)
        transactionsByWeek &&
        setTransactionsByWeek(transactionsByWeek)
      } catch (err) {
        setError(err)
      }
    }
    fetchHandler()
  }, [selectedAccountUid, categoryId, changesSince])

  useEffect(() => {
    const list = getTransactionsWeekByCashflow(transactionsByWeek, CASH_DIRECTION_OUT)
    setCashOutTransactionWeekList(list)
  }, [transactionsByWeek])

  return (
    <>
      <h1>Transactions</h1>
      {
        (!error &&
        transactionsByWeek &&
        Object.keys(transactionsByWeek).map((weekName: string, index) => {
          return (
            <TransactionsByWeekContainer key={index}>
              <h3>{weekName.split('_').join(' ')}</h3>
              <table key={index}>
                <thead>
                  <tr>
                      {
                        TRANSACTION_TABLE_DATA_NAMES.map((name, index) => (
                          <td key={index}>
                            {getTableDataNameByType(name)}
                          </td>
                        ))
                      }
                    </tr>
                </thead>
                <tbody>
                  {
                    transactionsByWeek[weekName] &&
                    transactionsByWeek[weekName].map((data: any, key: number) => (
                      <tr key={key}>
                        {
                          TRANSACTION_TABLE_DATA_NAMES.map((name, index) => (
                            <td key={index}>
                              {
                                (name === 'transactionTime' && getTableDateByISO(data[name])) ||
                                (name !== 'minorUnits' && data[name]) ||
                                traillingZero(converMinorUnitToTwoDecimal(data.amount[name]))
                              }
                            </td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              {
                cashOutTransactionWeekList &&
                cashOutTransactionWeekList[weekName] &&
                <RoundUpBar cashOutTransactionWeekList={cashOutTransactionWeekList[weekName]} selectedAccountUid={selectedAccountUid} />
              }
            </TransactionsByWeekContainer>
          )
        })) ||
        <Loading />
      }
    </>
  )
}

export default TransactionFeed