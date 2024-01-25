import {Button, ListItem, Line, Para, Text} from './styledComponents'

const CountriesList = props => {
  const {listDetails, clickOnVisitBtn} = props
  const {name, isVisited, id} = listDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickVisitBtn = () => {
    clickOnVisitBtn(id)
  }

  return (
    <>
      <ListItem>
        <Para>{name}</Para>
        {isVisited ? (
          <Text>{text}</Text>
        ) : (
          <Button
            type="button"
            bgColor={isVisited}
            color={isVisited}
            onClick={onClickVisitBtn}
          >
            {text}
          </Button>
        )}
      </ListItem>
      <Line />
    </>
  )
}

export default CountriesList
