import React from 'react'
import { addImage } from './../actions'
import PropTypes from 'prop-types'


const UploadButton = (props, { store }) => {
  const getBase64Image = function(img) {

    let base64 = new Promise((resolve,reject) => {
             const reader = new FileReader();
             reader.onload = () => resolve(reader.result);
             reader.onerror = error => reject(error);
             reader.readAsDataURL(img);
          });

    return base64;
    }

    const uploadImage = function(e) {
      let image = getBase64Image(e.target.files[0])

      image.then(function(base64) {
      store.dispatch(addImage(base64))
    });

    }

    return (
        <label className="btn btn-outline-primary mr-2 mb-1">
        <input 
          className="d-none"
          type="file"
          onChange={(e)=>uploadImage(e)}
          />
          Upload Image
      </label>
    )
}

UploadButton.contextTypes = {
    store: PropTypes.object
}

export default UploadButton