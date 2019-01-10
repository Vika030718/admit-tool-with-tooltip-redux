import C from '../constants'

export const  image = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_IMAGE:
      return {
        id: action.id,
        title: action.title,
        src: action.src,
        pointer: {},
        tooltip: ""
      }
    case C.ADD_TOOLTIP:
      return (state.id !== action.id) ?
          state :
          {
            ...state,
            tooltip: action.tooltip
          }
    case C.ADD_POINTER:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          pointer: action.pointer
        }
    case C.ADD_TITLE:
      return (state.id !== action.id) ?
        state :
        {
          ...state,
          title: action.title
        }
    default :
      return state
  }
}


export const gallery = (state = [], action) => {
    switch (action.type) {
        case C.ADD_IMAGE :
            // console.log(`----- gallery ADD_IMAGE`)
            return [
                ...state,
                image({}, action)
            ]
        case C.REMOVE_IMAGE :
            // console.log(`----- gallery REMOVE_IMAGE`)
            return state.filter(
                c => c.id !== action.id
            )
        case C.ADD_TOOLTIP:
            // console.log(`----- gallery ADD_TOOLTIP`)
            return state.map(
                c => image(c, action)
            )
        case C.ADD_POINTER:
            // console.log(`----- gallery ADD_POINTER`)
            return state.map(
                c => image(c, action)
            )
        case C.ADD_TITLE:
            // console.log(`----- gallery ADD_TOOLTIP`)
            return state.map(
                c => image(c, action)
            )
        default:
            // console.log(`----- gallery default`)
            return state
    }
}

export const openedPopupId = (state = "", action) =>{
    switch (action.type) {
        case C.OPEN_POPUP: 
            // console.log(`----- OPEN_POPUP reduser`)
            return action.id
        default:
            // console.log(`----- default of openPopup`)
            return state
    }
}
