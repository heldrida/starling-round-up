import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount, IAccountResponseError } from '../../Utils/Types'
import Account from '../../Components/Account'
import { CtaButton } from './styled'
import TransactionFeed from '../../Components/TransactionFeed'

const Dashboard = () => {
  const beginningOfTime = new Date(0).toISOString()
  const [accounts, setAccounts] = useState<IAccount[] | undefined>(undefined)
  const [error, setError] = useState<IAccountResponseError | undefined>(undefined)
  const [selectedAccountUid, setSelectedAccountUid] = useState<string | undefined>(undefined)
  const [categoryId, setCategoryId] = useState<string | undefined>(undefined)
  const [changesSince] = useState<string>(beginningOfTime)
 
  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const { data } = await getAccounts()
        data &&
        data.accounts &&
        setAccounts(data.accounts)
      } catch (err) {
        setError(err)
      }
    }
    fetchHandler()
  }, [])

  const accountSelectionHandler = (e: React.MouseEvent<HTMLElement>) => {
    const accountUid = e.currentTarget.getAttribute('data-accountuid')
    const categoryid = e.currentTarget.getAttribute('data-categoryid')
    accountUid && setSelectedAccountUid(accountUid)
    categoryid && setCategoryId(categoryid)
  }

  return (
    <>
      <div>
        <h1>Accounts</h1>
        {
          !error &&
          accounts &&
          accounts.map((account: IAccount, key) => (
            <Account key={key} account={account}>
              <CtaButton onClick={accountSelectionHandler}
                         data-accountuid={account.accountUid}
                         data-categoryid={account.defaultCategory}>{`Select this account`}</CtaButton>
            </Account>
          ))
        }
      </div>
      <div>
        {
          selectedAccountUid &&
          categoryId &&
          <TransactionFeed selectedAccountUid={selectedAccountUid} categoryId={categoryId} changesSince={changesSince} />
        }
      </div>
    </>
  )
}

export default Dashboard