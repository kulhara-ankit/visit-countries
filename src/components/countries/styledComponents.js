import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #161624;
  background-size: cover;
  width: 100%;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
    background-size: cover;
    padding-top: 14px;
    padding-left: 14px;
    padding-right: 14px;
  }
`
export const CountriesHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`
export const CountriesHeadingPara = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: 600;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`
export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-y: auto;
  border: 1px solid #334155;
  background-color: #1f1f2f;
  border-radius: 9px;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    height: 40vh;
  }
`

export const VisitedUnOrder = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
export const NoCountries = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 41vh;
`
