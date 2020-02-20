const mockAccountResponse = {
  "accounts": [
    {
      "accountUid":"30762567-571b-4535-8903-e493f90bb105",
      "defaultCategory":"d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "currency":"GBP",
      "createdAt":"2020-02-19T17:32:05.054Z"
    }
  ]
}

const mockJanuaryTransactions = [
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 95
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 95
    },
    "direction": "OUT",
    "updatedAt": "2020-01-02T17:33:28.729Z",
    "transactionTime": "2020-01-02T17:33:28.257Z",
    "settlementTime": "2020-01-02T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 550
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 550
    },
    "direction": "OUT",
    "updatedAt": "2020-01-02T17:33:28.729Z",
    "transactionTime": "2020-01-02T17:33:28.257Z",
    "settlementTime": "2020-01-02T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 1990
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 1990
    },
    "direction": "OUT",
    "updatedAt": "2020-01-04T17:33:28.729Z",
    "transactionTime": "2020-01-04T17:33:28.257Z",
    "settlementTime": "2020-01-04T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 8910
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 8910
    },
    "direction": "OUT",
    "updatedAt": "2020-01-04T17:33:28.729Z",
    "transactionTime": "2020-01-04T17:33:28.257Z",
    "settlementTime": "2020-01-04T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 14999
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 14999
    },
    "direction": "OUT",
    "updatedAt": "2020-01-06T17:33:28.729Z",
    "transactionTime": "2020-01-06T17:33:28.257Z",
    "settlementTime": "2020-01-06T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 25500
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 25500
    },
    "direction": "OUT",
    "updatedAt": "2020-01-06T17:33:28.729Z",
    "transactionTime": "2020-01-06T17:33:28.257Z",
    "settlementTime": "2020-01-06T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  }
]

const mockFebruaryTransactions = [
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 195
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 195
    },
    "direction": "OUT",
    "updatedAt": "2020-02-02T17:33:28.729Z",
    "transactionTime": "2020-02-02T17:33:28.257Z",
    "settlementTime": "2020-02-02T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 750
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 750
    },
    "direction": "OUT",
    "updatedAt": "2020-02-02T17:33:28.729Z",
    "transactionTime": "2020-02-02T17:33:28.257Z",
    "settlementTime": "2020-02-02T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 3999
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 3999
    },
    "direction": "OUT",
    "updatedAt": "2020-02-04T17:33:28.729Z",
    "transactionTime": "2020-02-04T17:33:28.257Z",
    "settlementTime": "2020-02-04T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 50000
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 50000
    },
    "direction": "OUT",
    "updatedAt": "2020-02-04T17:33:28.729Z",
    "transactionTime": "2020-02-04T17:33:28.257Z",
    "settlementTime": "2020-02-04T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 99
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 99
    },
    "direction": "OUT",
    "updatedAt": "2020-02-06T17:33:28.729Z",
    "transactionTime": "2020-02-06T17:33:28.257Z",
    "settlementTime": "2020-02-06T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  },
  {
    "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
    "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
    "amount": {
      "currency": "GBP",
      "minorUnits": 100
    },
    "sourceAmount": {
      "currency": "GBP",
      "minorUnits": 100
    },
    "direction": "OUT",
    "updatedAt": "2020-02-06T17:33:28.729Z",
    "transactionTime": "2020-02-06T17:33:28.257Z",
    "settlementTime": "2020-02-06T17:33:28.680Z",
    "source": "FASTER_PAYMENTS_OUT",
    "status": "SETTLED",
    "counterPartyType": "PAYEE",
    "counterPartyUid": "601a9289-a2df-4861-9fe0-ecbeb885d570",
    "counterPartyName": "Mickey Mouse",
    "counterPartySubEntityUid": "926f4636-36f3-46f0-a0c0-69b802f47a52",
    "counterPartySubEntityName": "UK account",
    "counterPartySubEntityIdentifier": "204514",
    "counterPartySubEntitySubIdentifier": "00000825",
    "reference": "External Payment",
    "country": "GB",
    "spendingCategory": "PAYMENTS"
  }
]

const mockFeedSinceDateResponse = {
  "feedItems": [
    ...mockJanuaryTransactions,
    ...mockFebruaryTransactions
  ]
}

const mockSavingGoalsList = {
  "savingsGoalList": [
    {
      "savingsGoalUid": "77887788-7788-7788-7788-778877887788",
      "name": "Trip to Paris",
      "target": {
        "currency": "GBP",
        "minorUnits": 11223344
      },
      "totalSaved": {
        "currency": "GBP",
        "minorUnits": 11223344
      },
      "savedPercentage": 100
    }
  ]
}

const mockPutSavingGoalsResponse = {
  "savingsGoalUid": "77887788-7788-7788-7788-778877887788",
  "success": true,
  "errors": [
    {
      "message": "Something about the validation error"
    }
  ]
}

const mockPutSavingGoalsResponseError = {
  "errors": [
    {
      "message": "Something about the validation error"
    }
  ],
  "success": false
}

export {
  mockAccountResponse,
  mockFeedSinceDateResponse,
  mockSavingGoalsList,
  mockPutSavingGoalsResponse,
  mockPutSavingGoalsResponseError
}