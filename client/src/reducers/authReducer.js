import {FETCH_USER} from '../actions/types'

export default function (state=null,action){
    switch(action.type){
        case FETCH_USER:
            //en javascript, el string "" es interpretado como false. Por lo tanto
            //la siguiente línea indica que si el action.payload = "" entonces, que retorne false.
            return action.payload||false;
        default:
            return state;
    }
}