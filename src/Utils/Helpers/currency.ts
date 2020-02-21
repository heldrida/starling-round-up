const converMinorUnitToTwoDecimal = (minorUnits: number): number => minorUnits / 100

const traillingZero = (value: number): string => ""+value.toFixed(2) 

const roundUpCurrency = (minorUnits: number) => {
  const minorUnitsParsed = parseFloat(""+minorUnits).toFixed(2)
  const decimalPart = +("" + minorUnitsParsed).split('.')[1]
  let computed = decimalPart > 0 ? (1 - (decimalPart/100)) : 0
  return computed
}

const listOfValuesComputeWith = (list: number[], cb: (value: number) => number): number => list.reduce((acc, curr) => acc += cb(curr), 0)

export {
  converMinorUnitToTwoDecimal,
  roundUpCurrency,
  listOfValuesComputeWith,
  traillingZero
}