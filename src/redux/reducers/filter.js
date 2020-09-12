import { 
    PRIORITY_FILTERS, 
    SET_PRIORITY_FILTER, 
    SET_VISIBILITY_FILTER, 
    VISIBILITY_FILTERS,
    SET_KEYWORD
} from '../actions/actionTypes'

const initialState = {
    visibility: VISIBILITY_FILTERS.SHOW_ALL,
    priority: PRIORITY_FILTERS.SHOW_ALL,
    keyword: ''
}

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibility: action.filter
            }
        
        case SET_PRIORITY_FILTER:
            return {
                ...state,
                priority: action.filter
            }
        
        case SET_KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        
        default:
            return state
    }
}
