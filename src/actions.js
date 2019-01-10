import { v4 } from 'uuid';
import C from './constants';

export const addImage = file => (
  {
    type: C.ADD_IMAGE,
    id: v4(),
    src: file,
    title: '',
    pointer: {
      pointerRect: false,
      pointerX: false,
      pointerY: false,
    },
    tooltip: '',
  });

export const removeImage = id => (
  {
    type: C.REMOVE_IMAGE,
    id,
  });

export const addPointer = (id, pointerRect, pointerX, pointerY) => (
  {
    type: C.ADD_POINTER,
    id,
    pointer: {
      pointerRect,
      pointerX,
      pointerY,
    },
  });

export const addTooltip = (id, tooltip) => (
  {
    type: C.ADD_TOOLTIP,
    id,
    tooltip,
  });


export const openPopup = id => (
  {
    type: C.OPEN_POPUP,
    id,
  });

export const addTitle = (id, title) => (
  {
    type: C.ADD_TITLE,
    id,
    title,
  });
