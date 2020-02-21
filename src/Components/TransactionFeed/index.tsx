import React, { useState, useEffect } from 'react'
import { getFeedItems } from '../../Utils/Helpers/api'
import { groupTransactionsByWeeks } from '../../Utils/Helpers/date'
import { IAccountResponseError, IFeedItems, ITransactionsByWeek } from '../../Utils/Types'
import { TransactionsByWeekContainer } from './styled'

const TransactionFeed = ({selectedAccountUid, categoryId, changesSince}: {selectedAccountUid: string, categoryId: string, changesSince: string}) => {
  const [feedItems, setFeedItems] = useState<IFeedItems[] | undefined>(undefined)
  const [error, setError] = useState<IAccountResponseError | undefined>(undefined)
  const [transactionsByWeek, setTransactionsByWeek] = useState<ITransactionsByWeek | undefined>(undefined)

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await getFeedItems(selectedAccountUid, categoryId, changesSince)
        const transactionsByWeek = data &&
                                   data?.feedItems &&
                                   groupTransactionsByWeeks(data.feedItems)
        console.log('[debug] transactionsByWeek: ', transactionsByWeek)
        transactionsByWeek &&
        setTransactionsByWeek(transactionsByWeek)
      } catch (err) {
        setError(err)
      }
    }
    fetchHandler()
  }, [selectedAccountUid, categoryId, changesSince])

  return (
    <>
      {
        transactionsByWeek &&
        Object.keys(transactionsByWeek).map((weekName, index) => {
          return (
            <TransactionsByWeekContainer key={index}>
              <h3>{weekName}</h3>
              <table key={index}>
                <tbody>
                  {
                    transactionsByWeek[weekName] &&
                    transactionsByWeek[weekName].map((data: any, key: number) => (
                      <tr key={key}>
                        {
                          ['minorUnits', 'direction', 'status', 'transactionTime', 'country'].map((name, index) => (
                            <td key={index}>
                              {(name !== 'minorUnits' && data[name]) || data.amount[name]}
                            </td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </TransactionsByWeekContainer>
          )
        })
      }
    </>
  )
}

export default TransactionFeed