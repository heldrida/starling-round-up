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

interface IFeedItemsList {
  [name: string]: string
}

interface ITransactionsByWeek {
  [name: string]: any
}


interface IParamPutSavingGoals {
  'name': string,
  'currency': string,
  'target': {
    'currency': string,
    'minorUnits': number
  },
  'base64EncodedPhoto'?: string
}

export {
  IAccount,
  IGetAccountsResponseData,
  IAccountResponseError,
  IFeedItems,
  IFeedItemsList,
  ITransactionsByWeek,
  IParamPutSavingGoals
}