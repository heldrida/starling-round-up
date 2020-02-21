import React, { useState, useEffect } from 'react'
import { CtaButtonSmall } from './styled'
import { converMinorUnitToTwoDecimal, roundUpCurrency, listOfValuesComputeWith, convertTwoDecimalToMinorUnit, putSavingGoals, createSavingGoalsPutData } from '../../Utils/Helpers'
import { CURRENCY_DEFAULT, GOAL_NAME_DEFAULT } from '../../Utils/constants'
import { ISaveResponse, ICashoutTransactionWeekListItem } from '../../Utils/Types'

const RoundUpBar = ({cashOutTransactionWeekList, selectedAccountUid}: {cashOutTransactionWeekList: ICashoutTransactionWeekListItem[], selectedAccountUid: string}) => {
  const [roundUp, setRoundUp] = useState<number>(0)
  const [saveResponse, setSaveResponse] = useState<ISaveResponse | undefined>(undefined)
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const list: number[] | false = cashOutTransactionWeekList &&
                 Array.isArray(cashOutTransactionWeekList) &&
                 cashOutTransactionWeekList.map((data: any) => converMinorUnitToTwoDecimal(data.amount?.minorUnits))
    const roundUp = list && listOfValuesComputeWith(list, roundUpCurrency)
    roundUp && setRoundUp(roundUp)
  }, [cashOutTransactionWeekList])

  const saveRoundUpHandler = async () => {
    const minorUnits = convertTwoDecimalToMinorUnit(roundUp)
    const paramSavingGoals = createSavingGoalsPutData(GOAL_NAME_DEFAULT, CURRENCY_DEFAULT, minorUnits)
    try {
      const { data } = await putSavingGoals(selectedAccountUid, paramSavingGoals)
      setSaveResponse(data)
    } catch (err) {
      setError('Oops! The service is down at the moment, please try again later!')
    }
  }

  return (
    <div>
      {
        (!error && !saveResponse &&
          <>
            <p>{`The round-up for the amount spent this week is £${roundUp}.`}</p>
            <p>{`Would you like to transfer the amount to your savings?`}</p>
            <CtaButtonSmall onClick={saveRoundUpHandler}>Save round-up</CtaButtonSmall>
          </>
        ) ||
        (!error &&  <p>{`Saved your goal ${saveResponse?.savingsGoalUid}`}</p>)
      }
      {
        (error && <p>{error}</p>)
      }
    </div>
  )
}

export default RoundUpBar
