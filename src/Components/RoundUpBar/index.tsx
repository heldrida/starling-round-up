import React, { useState, useEffect } from 'react'
import { CtaButtonSmall } from './styled'
import { converMinorUnitToTwoDecimal, roundUpCurrency, listOfValuesComputeWith, convertTwoDecimalToMinorUnit, putSavingGoals, createSavingGoalsPutData } from '../../Utils/Helpers'
import { CURRENCY_DEFAULT, GOAL_NAME_DEFAULT } from '../../Utils/constants'

interface ISaveResponse {
  savingsGoalUid: string,
  success: boolean,
  errors: any[]
}

const RoundUpBar = ({cashOutTransactionWeekList, selectedAccountUid}: {cashOutTransactionWeekList: any, selectedAccountUid: string}) => {
  const [roundUp, setRoundUp] = useState(0)
  const [saveResponse, setSaveResponse] = useState<ISaveResponse | undefined>(undefined)

  useEffect(() => {
    const list = cashOutTransactionWeekList &&
                 Array.isArray(cashOutTransactionWeekList) &&
                 cashOutTransactionWeekList.map((data: any) => converMinorUnitToTwoDecimal(data.amount?.minorUnits))
    const roundUp = list && listOfValuesComputeWith(list, roundUpCurrency)
    roundUp && setRoundUp(roundUp)
  }, [])

  const saveRoundUpHandler = async () => {
    const minorUnits = convertTwoDecimalToMinorUnit(roundUp)
    const paramSavingGoals = createSavingGoalsPutData(GOAL_NAME_DEFAULT, CURRENCY_DEFAULT, minorUnits)
    const { data } = await putSavingGoals(selectedAccountUid, paramSavingGoals)
    setSaveResponse(data)
  }

  return (
    <div>
      {
        (!saveResponse &&
          <>
            <p>{`The round-up for the amount spent this week is £${roundUp}.`}</p>
            <p>{`Would you like to transfer the amount to your savings?`}</p>
            <CtaButtonSmall onClick={saveRoundUpHandler}>Save round-up</CtaButtonSmall>
          </>
        ) ||
        <p>{`Saved your goal ${saveResponse?.savingsGoalUid}`}</p>
      }
    </div>
  )
}

export default RoundUpBar
