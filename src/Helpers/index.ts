const getTransactionDate = (transactionTime: string): Date => {
  return new Date(transactionTime)
}

export {
  getTransactionDate
}