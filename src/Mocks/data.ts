
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

const mockFeedSinceDateResponse = {
  "feedItems": [
    {
      "feedItemUid": "5b7d8f34-0967-4311-965d-59a1a4d67717",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 2042
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 2042
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.729Z",
      "transactionTime": "2020-02-19T17:33:28.257Z",
      "settlementTime": "2020-02-19T17:33:28.680Z",
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
      "feedItemUid": "5b7d7591-c75f-475e-a338-1ac0f3879a02",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 1332
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 1332
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.621Z",
      "transactionTime": "2020-02-19T17:33:28.222Z",
      "settlementTime": "2020-02-19T17:33:28.563Z",
      "source": "FASTER_PAYMENTS_OUT",
      "status": "SETTLED",
      "counterPartyType": "PAYEE",
      "counterPartyUid": "85007b16-d988-43b1-9aa6-1c478dbb059e",
      "counterPartyName": "Mickey Mouse",
      "counterPartySubEntityUid": "3482fd74-f5e1-4f4e-a83a-256948498af2",
      "counterPartySubEntityName": "UK account",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "00000825",
      "reference": "External Payment",
      "country": "GB",
      "spendingCategory": "PAYMENTS"
    },
    {
      "feedItemUid": "5b7d5281-8311-457d-9e14-f4f37a9a9547",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 3185
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 3185
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.610Z",
      "transactionTime": "2020-02-19T17:33:28.205Z",
      "settlementTime": "2020-02-19T17:33:28.547Z",
      "source": "FASTER_PAYMENTS_OUT",
      "status": "SETTLED",
      "counterPartyType": "PAYEE",
      "counterPartyUid": "ea74f66e-f6d3-4b6b-b969-cd700c9da999",
      "counterPartyName": "Mickey Mouse",
      "counterPartySubEntityUid": "4f637717-20f3-4f43-9f31-eb78e62242e8",
      "counterPartySubEntityName": "UK account",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "00000825",
      "reference": "External Payment",
      "country": "GB",
      "spendingCategory": "PAYMENTS"
    },
    {
      "feedItemUid": "5b7ddd68-ff1a-4559-9205-b8dbaefe31c9",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 2162
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 2162
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.548Z",
      "transactionTime": "2020-02-19T17:33:28.183Z",
      "settlementTime": "2020-02-19T17:33:28.494Z",
      "source": "FASTER_PAYMENTS_OUT",
      "status": "SETTLED",
      "counterPartyType": "PAYEE",
      "counterPartyUid": "9478923a-f310-41a5-80a6-e900c36a74ae",
      "counterPartyName": "Mickey Mouse",
      "counterPartySubEntityUid": "283df247-e133-47c2-87d5-d362c938b87c",
      "counterPartySubEntityName": "UK account",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "00000825",
      "reference": "External Payment",
      "country": "GB",
      "spendingCategory": "PAYMENTS"
    },
    {
      "feedItemUid": "5b7d2810-f1ab-4b70-a8f5-270da9f25b64",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 2393
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 2393
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.506Z",
      "transactionTime": "2020-02-19T17:33:28.166Z",
      "settlementTime": "2020-02-19T17:33:28.453Z",
      "source": "FASTER_PAYMENTS_OUT",
      "status": "SETTLED",
      "counterPartyType": "PAYEE",
      "counterPartyUid": "56371c5c-d081-4a79-9d80-05248bd321d7",
      "counterPartyName": "Mickey Mouse",
      "counterPartySubEntityUid": "15d3bb0f-8f34-4ce3-a384-98a38250624b",
      "counterPartySubEntityName": "UK account",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "00000825",
      "reference": "External Payment",
      "country": "GB",
      "spendingCategory": "PAYMENTS"
    },
    {
      "feedItemUid": "5b7db711-5a3f-4e5c-a579-0f650c3eb5c2",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 2684
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 2684
      },
      "direction": "OUT",
      "updatedAt": "2020-02-19T17:33:28.458Z",
      "transactionTime": "2020-02-19T17:33:28.028Z",
      "settlementTime": "2020-02-19T17:33:28.308Z",
      "source": "FASTER_PAYMENTS_OUT",
      "status": "SETTLED",
      "counterPartyType": "PAYEE",
      "counterPartyUid": "7855e8d4-6023-4fa9-a8b7-7c4e829b55ef",
      "counterPartyName": "Mickey Mouse",
      "counterPartySubEntityUid": "d570d7d3-fc5c-4f84-a68f-19f30dfd3c04",
      "counterPartySubEntityName": "UK account",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "00000825",
      "reference": "External Payment",
      "country": "GB",
      "spendingCategory": "PAYMENTS"
    },
    {
      "feedItemUid": "5b7db7f2-1b92-423b-9792-8152d8f04f8b",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 289
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 289
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:28.165Z",
      "transactionTime": "2020-02-19T17:33:28.000Z",
      "settlementTime": "2020-02-19T17:33:28.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "204514",
      "counterPartySubEntitySubIdentifier": "51767355",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7d1ec1-d1d9-4fe1-9be9-58b240521d7b",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 50000
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 50000
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.529Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "166051",
      "counterPartySubEntitySubIdentifier": "76699964",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7ddef2-fed8-421f-9d7b-cd3b439116c0",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 3775
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 3775
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.946Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "203002",
      "counterPartySubEntitySubIdentifier": "70838111",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7d959d-4ae4-46f1-9f5e-6028a1fca95f",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 2530
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 2530
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.824Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "203002",
      "counterPartySubEntitySubIdentifier": "65290488",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7d9658-d21e-42c0-9481-f48c802edb68",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 200000
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 200000
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.727Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "166051",
      "counterPartySubEntitySubIdentifier": "99799974",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7d1a28-36cd-48a3-a788-5f0577f4da89",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 3124
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 3124
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.911Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "166051",
      "counterPartySubEntitySubIdentifier": "97599951",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7de19b-6739-4e7f-be13-ed418792a05d",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 1175
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 1175
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.995Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "203002",
      "counterPartySubEntitySubIdentifier": "86554988",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    },
    {
      "feedItemUid": "5b7d3089-d5fa-4faf-b3ea-8e49549cf04c",
      "categoryUid": "d4c9a24b-3a2a-446f-97d5-7ba74273f00f",
      "amount": {
        "currency": "GBP",
        "minorUnits": 508
      },
      "sourceAmount": {
        "currency": "GBP",
        "minorUnits": 508
      },
      "direction": "IN",
      "updatedAt": "2020-02-19T17:33:27.939Z",
      "transactionTime": "2020-02-19T17:33:27.000Z",
      "settlementTime": "2020-02-19T17:33:27.000Z",
      "source": "FASTER_PAYMENTS_IN",
      "status": "SETTLED",
      "counterPartyType": "SENDER",
      "counterPartyName": "MR CUSTOMER",
      "counterPartySubEntityName": "",
      "counterPartySubEntityIdentifier": "166051",
      "counterPartySubEntitySubIdentifier": "76699964",
      "reference": "someRef",
      "country": "GB",
      "spendingCategory": "INCOME"
    }
  ]
}

export {
  mockAccountResponse,
  mockFeedSinceDateResponse
}