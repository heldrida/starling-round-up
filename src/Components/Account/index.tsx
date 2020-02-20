import React from 'react'
import { AccountContainer, AccountItem } from './styled'
import { IAccount } from '../../Utils/Types'

const Account = ({account, children}:{account: IAccount, children?: any}) => (
  <>
    <AccountContainer>
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
      { children }
    </AccountContainer>
  </>
)

export default Account