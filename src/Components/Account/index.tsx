import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount } from '../../Utils/Types'
import { AccountContainer, AccountItem } from './styled'

const Account = () => {
  const [data, setData] = useState<IAccount | undefined>(undefined)

  useEffect(() => {
    const fetchHandler = async () => {
      const { data } = await getAccounts()
      setData(data)
    }
    fetchHandler()
  }, [])

  return (
    <>
      {
        data &&
        <AccountContainer>
          <AccountItem>{data?.accountUid}</AccountItem>
          <AccountItem>{data?.defaultCategory}</AccountItem>
          <AccountItem>{data?.currency}</AccountItem>
          <AccountItem>{data?.createdAt}</AccountItem>
        </AccountContainer>
      }
    </>
  )
}

export default Account