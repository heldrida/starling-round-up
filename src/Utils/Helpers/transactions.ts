const getTableDataNameByType = (name: string): string => {
  const NAMED: { [name: string]: string } = {
    'minorUnits': 'spent',
    'transactionTime': 'transaction time',
    'direction': 'cashflow'
  }
  return (NAMED.hasOwnProperty(name) && NAMED[name]) || name
}

const getTableDateByISO = (isoTime: string) => {
  const date = new Date(isoTime).toString()
  return date &&
         date.split('GMT')[0]
}

export {
  getTableDataNameByType,
  getTableDateByISO
}