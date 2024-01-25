import styled from 'styled-components'

export const ListImg = styled.li`
  background-color: #1f1f2f;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 12px;
  border-radius: 12px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 130px;
    margin: 8px;
    padding: 4px;
    flex-wrap: wrap;
  }
`
export const ImageMap = styled.img`
  width: 100%;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 8vh;
  }
`
export const BtnNameCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`
export const Name = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  margin-left: 18px;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 12px;
    margin-left: 10px;
  }
`
export const RemoveBtn = styled.button`
  border: 1px solid #f1f5f9;
  color: #f1f5f9;
  background-color: transparent;
  width: 80px;
  margin: 10px;
  border-radius: 5px;
  padding: 10px;
  @media screen and (max-width: 768px) {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 10px;
    width: 40px;
    padding: 2px;
    height: 30px;
    margin: 4px;
  }
`
