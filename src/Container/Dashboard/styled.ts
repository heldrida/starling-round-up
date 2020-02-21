import styled from 'styled-components'

const DashboardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  text-align: center;
`

const DashboardSection = styled.div`
  width: 40vw;
  background: rgba(255, 200, 225, 0.3);
  padding: 1rem 1rem 4rem;
  margin: 1rem;
  min-width: 35rem;
`

const CtaButton = styled.div`
  border: 1px solid #333;
  background: #333;
  color: #fff;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
  cursor: pointer;
`

const ErrorContainer = styled.div`
  padding: 1rem 0;
`

export {
  DashboardContainer,
  DashboardSection,
  CtaButton,
  ErrorContainer
}