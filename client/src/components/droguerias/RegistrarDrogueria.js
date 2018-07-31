import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/index';
import {Alert, PageHeader, Button } from 'react-bootstrap';
import WrappedFormControl from '../WrappedFormControl';

/**
 * This class creates new drugstores.
 */
class RegistrarDrogueria extends Component {
    state = {};
    renderContent() {
        console.log(this.props.drugstore.registered);
        return (
            <div>
                <PageHeader> Droguerías <small> Creación de Droguerías </small> </PageHeader>
                <div hidden={this.props.drugstore.registered !== "1"}>
                    <Alert bsStyle="success">
                        La droguería ha sido creada exitosamente.
                    </Alert>
                </div>
                <Field
                    name="drugstoreName"
                    component={WrappedFormControl}
                    type="text"
                    placeholder="Nombre de la Drogueria"
                >
                    Nombre de la Drogueria
                        </Field>
                <Field
                    name="drugstoreAddress"
                    component={WrappedFormControl}
                    type="text"
                    placeholder="Direccion">
                    Direccion de la Drogueria
                        </Field>
                <Button type="submit">Submit</Button>
            </div>
        );
    }
    onSubmit = values => {
        this.props.createDrugstore(values)
            .then((value) => {
                console.log(this.props);
                console.log(this.props.drugstore.registered);
            })
    }
    onGoBack = () => {
        this.props.goBackDrugstoreCreation();
    }
    render() {
        const { handleSubmit } = this.props;
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
 * @param {drugstore} drugstore Representa la propiedad del reducer con los siguients valores:
 *                  * null cuando aun no hay respuesta
 *                  * false cuando el user no está logueado
 *                  * objeto de usuario cuando está autenticado.             
 */
function mapStateToProps({ drugstore }) {
    return { drugstore }
}


export default reduxForm({
    form: 'registrarDrogueria' // a unique identifier for this form
})(connect(
    mapStateToProps,
    actions // bind account loading action creator
)(RegistrarDrogueria));


