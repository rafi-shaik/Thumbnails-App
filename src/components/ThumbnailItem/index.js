// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, onClickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details

  const activeClassName = isActive ? 'active-image' : ''

  const imageClick = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="image-item">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-image ${activeClassName}`}
          onClick={imageClick}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
