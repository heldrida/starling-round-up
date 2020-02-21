import styled from 'styled-components'

const AccountContainer = styled.div`
  display: inline-block;
  border: 1px solid #bbb;
  padding: 1rem;
  margin: 1rem;
  
  & > h3 {
    border-bottom: 1px solid #bbb;
    padding: 1rem 0;
  }
`

const AccountItem = styled.div`
  line-height: 1.5;

  & > span {
    font-weight: bold;
    margin-right: 1rem;
  }
`

export {
  AccountContainer,
  AccountItem
}