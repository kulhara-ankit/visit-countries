import styled from 'styled-components'

export const Button = styled.button`
  width: 90px;
  padding-top: 0px;
  border: none;
  background-color: ${props => (props.bgColor ? 'transparent' : '#3b82f6')};
  color: ${props => (props.color ? '#334155' : '#ffffff')};
  border-radius: 5px;
  margin: 8px;
  @media screen and (max-width: 768px) {
    width: 50px;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
  padding-left: 80px;
  padding-right: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const Line = styled.hr`
  border: 1px solid #334155;
  width: 100%;
`
export const Para = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 800;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`
export const Text = styled.p`
  color: #94a3b8;
  background-color: transparent;
  margin-right: 28px;
  @media screen and (max-width: 768px) {
    margin-right: 10px;
  }
`
