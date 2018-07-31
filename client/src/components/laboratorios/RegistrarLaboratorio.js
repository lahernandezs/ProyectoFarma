import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions/index';
import {Alert, PageHeader, Button } from 'react-bootstrap';
import WrappedFormControl from '../WrappedFormControl';

/**
 * This class creates new laboratorys.
 */
class RegistrarLaboratorio extends Component {
    state = {};
    renderContent() {
        console.log(this.props.laboratory.registered);
        return (
            <div>
                <PageHeader> Laboratorios <small> Creación de Laboratorios </small> </PageHeader>
                <div hidden={this.props.laboratory.registered !== "1"}>
                    <Alert bsStyle="success">
                        El laboratorio ha sido creada exitosamente.
                    </Alert>
                </div>
                <Field
                    name="laboratoryName"
                    component={WrappedFormControl}
                    type="text"
                    placeholder="Nombre de la Laboratorio"
                >
                    Nombre de la Laboratorio
                        </Field>
                <Field
                    name="laboratoryAddress"
                    component={WrappedFormControl}
                    type="text"
                    placeholder="Direccion">
                    Direccion de la Laboratorio
                        </Field>
                <Button type="submit">Submit</Button>
            </div>
        );
    }
    onSubmit = values => {
        this.props.createLaboratory(values)
            .then((value) => {
                console.log(this.props);
            })
    }
    onGoBack = () => {
        this.props.goBackLaboratoryCreation();
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
 * @param {laboratory} laboratory Representa la propiedad del reducer con los siguients valores:
 *                  * null cuando aun no hay respuesta
 *                  * false cuando el user no está logueado
 *                  * objeto de usuario cuando está autenticado.             
 */
function mapStateToProps({ laboratory }) {
    return { laboratory }
}


export default reduxForm({
    form: 'registrarLaboratorio' // a unique identifier for this form
})(connect(
    mapStateToProps,
    actions // bind account loading action creator
)(RegistrarLaboratorio));


