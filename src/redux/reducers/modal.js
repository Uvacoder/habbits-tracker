const initialState = {
    visibility: false
}

export const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MODAL_VISIBILITY':
            return {
                visibility: action.visibility,
                id: action.id
            }
            
            default:
                return state
    }
}
