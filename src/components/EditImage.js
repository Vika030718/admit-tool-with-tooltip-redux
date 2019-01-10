import React from 'react';
import { addTooltip, addPointer } from './../actions';
import PropTypes from 'prop-types';

const EditImage = ({ store, image }) => {

  const selectTooltip = function(e){
    let tooltip = e.target.previousElementSibling.value;
    e.target.previousElementSibling.value='';
    store.dispatch(addTooltip(image.id, tooltip));
  }

  const selectPointer = function(e){
    var pointerRect = e.target.getBoundingClientRect();
    var pointerX = e.clientX - pointerRect.left + 8 + 'px';
    var pointerY = e.clientY - pointerRect.top + 8 + 'px';

    store.dispatch(addPointer(image.id, pointerRect, pointerX, pointerY));
  }

  return (
    <div className="modal" id="edit-image">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <section className="w-100">
              <h5 className="modal-title">- Click on image to <b>add a pointer</b></h5>
              <h5 className="modal-title">- Click on any new place to <b>move your pointer</b></h5>
              <div className="d-flex align-items-center">
                <input type="text"
                       placeholder="Add a tooltip to your pointer"
                       className="w-100 mb-0"/>
                <button type="button"
                        className="btn btn-outline-primary ml-2 pt-1 pb-1 pl-3 pr-3"
                        onClick={(e)=>selectTooltip(e)}
                >
                        Save
                </button>
              </div>
            </section>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" >&times;</span>
            </button>
          </div>

        <div className="modal-body">
          {
            (image)?
            <img src={image.src} className="image" onClick={(e) => selectPointer(e)}/>:
            ""
          }
          {
            (image&&image.pointer&&image.pointer.pointerRect!==undefined)?
              <span id="my-pointer"
                    style={{left: image.pointer.pointerX, top: image.pointer.pointerY}}>
                      {
                        (image&&image.tooltip)?
                        <span tooltip={image.tooltip}></span>: ""
                      }
              </span>: ""
          }
        </div>
      </div>
    </div>
  </div>
    );
}

EditImage.propTypes = {
    store: PropTypes.object,
    image: PropTypes.object,
};

export default EditImage;
