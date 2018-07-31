import axios from 'axios';
import {FETCH_USER,CREATE_PRODUCT,SEARCH_PRODUCT,DELETE_PRODUCT,CREATE_DRUGSTORE,SEARCH_DRUGSTORE, DELETE_DRUGSTORE,CREATE_LABORATORY,DELETE_LABORATORY,SEARCH_LABORATORY} from './types';
import {reset} from 'redux-form';

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

export const createProduct = (product) => async dispatch =>{
        const res = await axios.post('/api/product',product);
        dispatch({type:CREATE_PRODUCT,payload:[res.data]}) ;
};

export const goBackProductCreation = () => dispatch =>{
        dispatch(reset("registrarProducto"));
        dispatch({type:CREATE_PRODUCT,payload:[{"registered":false}]}) ;
};

export const searchProducts = () => async dispatch =>{
        await axios.get('/api/product/')
        .then(respuesta=>{
                dispatch({type:SEARCH_PRODUCT,payload:respuesta.data}) ;

        })
};

export const deleteProduct = (product) => async dispatch =>{
        const res = await axios.delete('/api/product',product);
        dispatch({type:DELETE_PRODUCT,payload:res.data}) ;
};

/**
 * DRUGSTORES
 */
export const createDrugstore = (drugstore) => async dispatch =>{
        console.log("entro");
        const res = await axios.post('/api/drugstore',drugstore);
        dispatch({type:CREATE_DRUGSTORE,payload:[res.data]}) ;
};

export const goBackDrugstoreCreation = () => dispatch =>{
        dispatch(reset("registrarDrogueria"));
        dispatch({type:CREATE_DRUGSTORE,payload:[{"registered":false}]}) ;
};

export const searchDrugstores = () => async dispatch =>{
        await axios.get('/api/drugstore/')
        .then(respuesta=>{
                dispatch({type:SEARCH_DRUGSTORE,payload:respuesta.data}) ;

        })
};

export const deleteDrugstore = (drugstore) => async dispatch =>{
        const res = await axios.delete('/api/drugstore',drugstore);
        dispatch({type:DELETE_DRUGSTORE,payload:res.data}) ;
};


/**
 * LABORATORIES
 */
export const createLaboratory = (laboratory) => async dispatch =>{
        console.log("entro");
        const res = await axios.post('/api/laboratory',laboratory);
        dispatch({type:CREATE_LABORATORY,payload:[res.data]}) ;
};

export const goBackLaboratoryCreation = () => dispatch =>{
        dispatch(reset("registrarDrogueria"));
        dispatch({type:CREATE_LABORATORY,payload:[{"registered":false}]}) ;
};

export const searchLaboratories = () => async dispatch =>{
        await axios.get('/api/laboratory/')
        .then(respuesta=>{
                dispatch({type:SEARCH_LABORATORY,payload:respuesta.data}) ;

        })
};

export const deleteLaboratory = (laboratory) => async dispatch =>{
        const res = await axios.delete('/api/laboratory',laboratory);
        dispatch({type:DELETE_LABORATORY,payload:res.data}) ;
};