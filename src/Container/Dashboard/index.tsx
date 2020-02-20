import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount, IAccountResponseError } from '../../Utils/Types'
import Account from '../../Components/Account'

const Dashboard = () => {
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
        accounts.map((account: IAccount, key) => (
          <Account key={key} account={account} />
        ))
      }
    </>
  )
}

export default Dashboard