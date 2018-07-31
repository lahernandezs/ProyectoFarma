import {combineReducers} from 'redux';
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form'
import productReducer from './farmacia/productReducer';
import drugstoreReducer from './farmacia/drugstoreReducer';
import laboratoryReducer from './farmacia/laboratoryReducer';
export default combineReducers({
    authReducer,
    form:formReducer,
    product:productReducer,
    drugstore:drugstoreReducer,
    laboratory:laboratoryReducer
})