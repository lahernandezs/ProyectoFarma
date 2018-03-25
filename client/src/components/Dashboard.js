import React from 'react';
import { Row, Input, Container,Button } from 'react-materialize'
import {Field,reduxForm} from 'redux-form';

   let Dashboard = props =>{
       const {handleSubmit} = props;
        return (
        <form onSubmit = {handleSubmit}>
                <h2> Creación de Productos</h2>
                    <label htmlFor="productName">Nombre del Producto</label>
                    <Field name="productName" component="input" type="text" />
                    <button type="submit">Submit</button>
        </form>
        )
    }

    Dashboard = reduxForm({
        // a unique name for the form
        form: 'dashboard'
      })(Dashboard)
export default Dashboard;