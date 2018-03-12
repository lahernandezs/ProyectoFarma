import axios from 'axios';
import {FETCH_USER} from './types';

/**
 * Payload: Es lo que realmente quiero obtener del mensaje en el browser
 *      Si coloco solo "res", se muestra todo, solo importa el ".data" que 
 *      representa el response real.
 */
export const fetchUser = () => async dispatch =>{
        const res = await axios.get('/api/current_user');
        dispatch({type:FETCH_USER,payload:res.data}) ;
};

export const handleToken = (token) => async dispatch =>{
        const res = await axios.post('/api/stripe',token);
        dispatch({type:FETCH_USER,payload:res.data}) ;
};