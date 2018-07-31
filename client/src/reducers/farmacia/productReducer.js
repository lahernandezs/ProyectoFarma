import {SEARCH_PRODUCT,CREATE_PRODUCT,DELETE_PRODUCT} from '../../actions/types'

export default function (state=[],action){
    switch(action.type){
        case CREATE_PRODUCT:
            return action.payload[0]||[];
        case SEARCH_PRODUCT:
            return action.payload||[];
        case DELETE_PRODUCT:
            return action.payload||[];
        default:
            return state;
    }
}

