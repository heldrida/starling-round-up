interface IAccount {
  "accountUid": string
  "defaultCategory": string
  "currency": string
  "createdAt": string
}

interface IGetAccountsResponseData {
  data?: {
    accounts?: IAccount[]
  }
}

interface IAccountResponseError {
  "errors": [
    {
      "message": string
    }
  ]
}

interface IFeedItems {
  feedItems: any[]
}

export {
  IAccount,
  IGetAccountsResponseData,
  IAccountResponseError,
  IFeedItems
}