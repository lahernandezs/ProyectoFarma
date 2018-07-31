import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/index';
import { PageHeader, Button, Alert,DropdownButton } from 'react-bootstrap';
import WrappedFormControl from '../WrappedFormControl';
import WrappedDropDownButton from '../WrappedDropDownButton';

/**
 * This class implements the creation of a product or a set of products.
 */
class RegistrarProducto extends Component {
    state = {};
    renderContent() {
        return (
            <div>
                <PageHeader> Productos <small> Creación de Productos </small> </PageHeader>
                <div hidden={this.props.product.registered !== 1}>
                    <Alert bsStyle="success">
                        El Producto ha sido creado exitosamente.
                    </Alert>
                </div>
                <Field
                    name="productName"
                    component={WrappedFormControl}
                    type="text"
                    placeholder="Nombre del Producto"
                >
                    Nombre del Producto
                        </Field>
                <Field
                    name="productPrice"
                    component={WrappedFormControl}
                    type="number"
                    placeholder="precio">
                    Precio del Producto
                        </Field>
                <Button type="submit">Submit</Button>
            </div>
        );
    }
    onSubmit = values => {
        this.props.createProduct(values)
            .then((value) => {
                console.log(this.props);
                console.log(this.props.product.registered);
            })
    }

    onLoad = () => {
        var labs = this.props.searchLaboratories();
    }
    onGoBack = () => {
        this.props.goBackProductCreation();
    }
    render() {
        const { handleSubmit, handleLoad } = this.props;
        console.log(this.props);

        return (


            <div className="container">
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    {this.renderContent()}
                </form>
            </div>
        )
    }
}

/**
 * Funcion necesaria para hacer el mapeo del state en el front
 * En este caso, header llama al authReducer
 * @param {*} auth Representa la propiedad del reducer con los siguients valores:
 *                  * null cuando aun no hay respuesta
 *                  * false cuando el user no está logueado
 *                  * objeto de usuario cuando está autenticado.             
 */
function mapStateToProps({ product }) {
    return { product }
}


export default reduxForm({
    form: 'registrarProducto' // a unique identifier for this form
})(connect(
    mapStateToProps,
    actions // bind account loading action creator
)(RegistrarProducto));


