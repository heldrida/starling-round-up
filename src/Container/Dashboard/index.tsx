import React, { useState, useEffect, useCallback } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount, IAccountResponseError } from '../../Utils/Types'
import Account from '../../Components/Account'
import { CtaButton } from './styled'

const Dashboard = () => {
  const [accounts, setAccounts] = useState<IAccount[] | undefined>(undefined)
  const [error, setError] = useState<IAccountResponseError | undefined>(undefined)
  const [selectedAccountUid, setSelectedAccountUid] = useState<string | undefined>(undefined)

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
    accountUid &&
    setSelectedAccountUid(accountUid)
  }

  return (
    <>
      {
        !error &&
        accounts &&
        accounts.map((account: IAccount, key) => (
          <Account key={key} account={account}>
            <CtaButton onClick={accountSelectionHandler} data-accountuid={account.accountUid}>{`Select this account`}</CtaButton>
          </Account>
        ))
      }
      {
        selectedAccountUid &&
        console.log('[debug] selectedAccountUid: ', selectedAccountUid)
      }
    </>
  )
}

export default Dashboard