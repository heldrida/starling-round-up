import React from 'react'
import { AccountContainer, AccountItem } from './styled'
import { IAccount } from '../../Utils/Types'

const Account = ({account}:{account: IAccount}) => (
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
    </AccountContainer>
  </>
)

export default Account