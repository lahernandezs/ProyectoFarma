import {SEARCH_DRUGSTORE,CREATE_DRUGSTORE,DELETE_DRUGSTORE} from '../../actions/types'

export default function (state=[],action){
    switch(action.type){
        case CREATE_DRUGSTORE:
            return action.payload[0]||[];
        case SEARCH_DRUGSTORE:
            return action.payload||[];
        case DELETE_DRUGSTORE:
            return action.payload||[];
        default:
            return state;
    }
}
