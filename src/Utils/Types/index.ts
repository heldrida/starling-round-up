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

interface ISaveResponse {
  savingsGoalUid: string,
  success: boolean,
  errors: any[]
}

interface IAmount {
  currency:   string
  minorUnits: number
}

interface ICashoutTransactionWeekList {
  feedItemUid: string
  categoryUid: string
  amount: IAmount
  sourceAmount: IAmount
  direction: string
  updatedAt: Date
  transactionTime: Date
  settlementTime: Date
  source: string
  status: string
  counterPartyType: string
  counterPartyUid: string
  counterPartyName: string
  counterPartySubEntityUid: string
  counterPartySubEntityName: string
  counterPartySubEntityIdentifier: string
  counterPartySubEntitySubIdentifier: string
  reference: string
  country: string
  spendingCategory: string
}

export {
  IAccount,
  IGetAccountsResponseData,
  IAccountResponseError,
  IFeedItems,
  IFeedItemsList,
  ITransactionsByWeek,
  IParamPutSavingGoals,
  ISaveResponse,
  ICashoutTransactionWeekList
}

