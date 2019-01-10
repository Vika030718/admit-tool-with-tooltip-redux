import React from 'react'
import PropTypes from 'prop-types'
import {FaEdit, FaTrash} from 'react-icons/fa'

const GalleryItem = ({ image, onRemove=f=>f, openPopup=g=>g, onEditTitle=u=>u }) =>
  <figure className='gallery__figure'>  
    <img src={image.src} className='img-fluid image'/>
    <figcaption className='gallery-item__figcaption'>
      <h5 className='gallery-item__title'
          onBlur={(e) => onEditTitle(e.target.innerHTML)}
          contentEditable="true"
          suppressContentEditableWarning="true">
          {image.title}
      </h5>
      <div className='gallery-item__buttons'>
        <button className='btn btn-primary mr-2'
              onClick={() => onRemove()}>
              <FaTrash />
        </button>
        <button className='btn btn-primary'
                onClick={() => openPopup()}
                data-toggle='modal'
                data-target='#edit-image'>
                <FaEdit />
        </button>
      </div>
    </figcaption>
  </figure>  


export default GalleryItem

GalleryItem.propTypes = {
  image: PropTypes.object,
  onRemove: PropTypes.func,
  openPopup: PropTypes.func,
  onEditTitle: PropTypes.func,
};