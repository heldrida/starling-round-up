import { roundUpCurrency,  listOfValuesComputeWith, converMinorUnitToTwoDecimal } from './index'

it('should round-up to the closest pound', () => {
  const data = [{
    currency: 4.35,
    expected: 0.65
  }, {
    currency: 5.20,
    expected: 0.80
  }, {
    currency: 0.87,
    expected: 0.13
  }]
  data.forEach(data => expect(roundUpCurrency(data.currency)).toBe(data.expected))
})

it('should sum all the computed rounded-up values in a list', () => {
  const data = [{
    currency: 4.35,
    expected: 0.65
  }, {
    currency: 5.20,
    expected: 0.80
  }, {
    currency: 0.87,
    expected: 0.13
  }]
  const list = data.map(data => data.currency)
  const total = listOfValuesComputeWith(list, roundUpCurrency)
  const expectedSum = 1.58
  expect(total).toBe(expectedSum)
})

it('should format the amount provided to two decimal currency that is GBP', () => {
  const data = [{
    minorUnit: 2050,
    expectedCurrency: 20.50
  }, {
    minorUnit: 1795,
    expectedCurrency: 17.95
  }, {
    minorUnit: 60,
    expectedCurrency: 0.60
  }, {
    minorUnit: 99999,
    expectedCurrency: 999.99
  }]
  data.forEach(data => expect(converMinorUnitToTwoDecimal(data.minorUnit)).toBe(data.expectedCurrency))
})