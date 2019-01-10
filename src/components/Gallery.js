import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'
import EditImage from './EditImage'
import { removeImage, openPopup, addTitle } from './../actions'


const Gallery = ({store}) =>{
    const { gallery, openedPopupId } = store.getState()
    let imageInPopup
    
    const selectImageOpened = function(id){
        gallery.map(image=> {
            if(image.id===id)
            imageInPopup = image
            
        })
        return imageInPopup
    }   

    return (
        <section>
            <div className="gallery" >
                {   
                    gallery.map((image, i)=>
                        <GalleryItem 
                                i={i}
                                key={i}
                                image={image}
                                onRemove={() =>
                                    store.dispatch(
                                        removeImage(image.id)
                                    )}
                                onEditTitle={(title) =>
                                    store.dispatch(
                                        addTitle(image.id, title)
                                    )}
                                openPopup={() =>
                                    store.dispatch(
                                        openPopup(image.id)
                                    )}/>
                    )
                }
                
            </div>
            {   
                <EditImage 
                    image={selectImageOpened(openedPopupId)}
                    store={store}/>
            }
        </section>
    );
}

Gallery.propTypes = {
    store: PropTypes.object,
};

export default Gallery