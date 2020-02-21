import styled from 'styled-components'

const TransactionsByWeekContainer = styled.div`
  display: inline-block;
  border: 1px solid #bbb;
  padding: 1rem;
  margin: 1rem;

  & > h3 {
    border-bottom: 1px solid #bbb;
    padding: 1rem 0;
  }

  & > table {
    & thead {
      text-transform: capitalize;
      font-weight: bold;
    }
    & td {
      padding: 0.5rem;
    }
  }
`

export {
  TransactionsByWeekContainer
}