import React, { useState, useEffect } from 'react'
import { getAccounts } from '../../Utils/Helpers/api'
import { IAccount, IAccountResponseError } from '../../Utils/Types'
import Account from '../../Components/Account'
import { DashboardContainer, DashboardSection, CtaButton, ErrorContainer } from './styled'
import TransactionFeed from '../../Components/TransactionFeed'
import Loading from '../../Components/Loading'

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
    <DashboardContainer>
      <DashboardSection>
        <h1>Accounts</h1>
        {
          (!error &&
          accounts &&
          accounts.map((account: IAccount, key) => (
            <Account key={key} account={account}>
              <CtaButton onClick={accountSelectionHandler}
                         data-accountuid={account.accountUid}
                         data-categoryid={account.defaultCategory}>{`Select this account`}</CtaButton>
            </Account>
          ))) ||
         (!error && <Loading />)
        }
        {
          error && <ErrorContainer>Oops! Have you followed the README instructions and set you access token?</ErrorContainer>
        }
      </DashboardSection>
      {
        !error &&
        selectedAccountUid &&
        categoryId &&
        <DashboardSection>
          <TransactionFeed selectedAccountUid={selectedAccountUid} categoryId={categoryId} changesSince={changesSince} />
        </DashboardSection>
      }
    </DashboardContainer>
  )
}

export default Dashboard