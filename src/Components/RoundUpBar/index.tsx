import React, { useState, useEffect } from 'react'
import { CtaButtonSmall } from './styled'
import { converMinorUnitToTwoDecimal, roundUpCurrency, listOfValuesComputeWith } from '../../Utils/Helpers'

const RoundUpBar = ({cashOutTransactionWeekList}: {cashOutTransactionWeekList: any}) => {
  const [roundUp, setRoundUp] = useState(0)

  useEffect(() => {
    const list = cashOutTransactionWeekList &&
                 Array.isArray(cashOutTransactionWeekList) &&
                 cashOutTransactionWeekList.map((data: any) => converMinorUnitToTwoDecimal(data.amount?.minorUnits))
    const roundUp = list && listOfValuesComputeWith(list, roundUpCurrency)
    roundUp && setRoundUp(roundUp)
  }, [])

  return (
    <div>
      <p>{`The round-up for the amount spent this week is £${roundUp}.`}</p>
      <p>{`Would you like to transfer the amount to your savings?`}</p>
      <CtaButtonSmall>Save round-up</CtaButtonSmall>
    </div>
  )
}

export default RoundUpBar
