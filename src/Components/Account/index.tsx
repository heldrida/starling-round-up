import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'

interface IAccount {
  "accountUid":"30762567-571b-4535-8903-e493f90bb105",
  "defaultCategory":"d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
  "currency":"GBP",
  "createdAt":"2020-02-19T17:32:05.054Z"
}

const Account = () => {
  const [data, setData] = useState<IAccount | undefined>(undefined)

  useEffect(() => {
    const fetchHandler = async () => {
      const { data } = await getAccounts()
      console.log('[debug] data: ', data)
      setData(data)
    }
    fetchHandler()
  }, [])

  return (
    <>
      { data }
    </>
  )
}

export default Account