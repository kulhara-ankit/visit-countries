import {
  ListImg,
  ImageMap,
  BtnNameCont,
  Name,
  RemoveBtn,
} from './styledComponents'

const VisitedCountries = props => {
  const {mapDetails, onClickRemove} = props
  const {imageUrl, name, id, isVisited} = mapDetails

  const onClickRemoveBtn = () => {
    onClickRemove(id)
  }

  return (
    <>
      {isVisited ? (
        <ListImg>
          <ImageMap src={imageUrl} alt="thumbnail" />
          <BtnNameCont>
            <Name>{name}</Name>
            <RemoveBtn type="button" onClick={onClickRemoveBtn}>
              Remove
            </RemoveBtn>
          </BtnNameCont>
        </ListImg>
      ) : null}
    </>
  )
}

export default VisitedCountries
