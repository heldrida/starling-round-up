import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount, IAccountResponseError } from '../../Utils/Types'
import { AccountContainer, AccountItem } from './styled'

const Account = () => {
  const [accounts, setAccounts] = useState<IAccount[] | undefined>(undefined)
  const [error, setError] = useState<IAccountResponseError | undefined>(undefined)

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

  return (
    <>
      {
        !error &&
        accounts &&
        accounts.map((account, key) => (
          <AccountContainer key={key}>
            <h3>Account details:</h3>
            <AccountItem>
              <span>{'uid'}</span>
              {account?.accountUid}
            </AccountItem>
            <AccountItem>
              <span>{'default category'}</span>
              {account?.defaultCategory}
            </AccountItem>
            <AccountItem>
              <span>currency</span>
              {account?.currency}
            </AccountItem>
            <AccountItem>
              <span>{'created at'}</span>
              {account?.createdAt}
            </AccountItem>
        </AccountContainer>
        ))
      }
    </>
  )
}

export default Account