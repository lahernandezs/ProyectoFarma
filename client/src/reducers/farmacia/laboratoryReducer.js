import {SEARCH_LABORATORY,CREATE_LABORATORY,DELETE_LABORATORY} from '../../actions/types'

export default function (state=[],action){
    switch(action.type){
        case CREATE_LABORATORY:
            return action.payload[0]||[];
        case SEARCH_LABORATORY:
            return action.payload||[];
        case DELETE_LABORATORY:
            return action.payload||[];
        default:
            return state;
    }
}
