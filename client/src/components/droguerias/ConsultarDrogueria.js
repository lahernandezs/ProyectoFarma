import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchDrugstores } from '../../actions';
import { reduxForm } from 'redux-form';
import { Table, Button,Pager,PageHeader } from 'react-bootstrap';

/**
 * This class queries the list of drugstores
 */
class ConsultarDrogueria extends Component {
    componentDidMount() {
        this.props.searchDrugstores();
    }
    eliminar(counter) {
        console.log("Se elimina " + counter);
    }

    renderContent() {
        var rows = [];
        var counter = 1;
        const valor = this.props.drugstore;
        valor.forEach(value => {
            rows.push(
                <tr key={counter}>
                    <td>{value.drugstoreName}</td>
                    <td>{value.drugstoreAddress}</td>
                    <td><Button href="#">Editar</Button></td>
                    <td><Button href="#">Eliminar</Button></td>
                </tr>);
            counter++;
        })


        return rows;
    }
    render() {
        return (
            <div className="container">
                 <PageHeader> Droguerias <small> Gestión de Droguerias </small> </PageHeader>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <td><b>Drogueria</b> </td>
                                    <td> <b>Dirección</b></td>
                                    <td> <b>Editar</b></td>
                                    <td> <b>Eliminar</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderContent()}
                            </tbody>
                        </Table>
                  
                        <Pager>
                            <Pager.Item href="#">Previous</Pager.Item>{' '}
                            <Pager.Item href="#">Next</Pager.Item>
                        </Pager>
                
            </div>
        );
    }

}

/**
 * Funcion necesaria para hacer el mapeo del state en el front (EL NOMBRE DEBE COINCIDIR CON EL NOMBRE DECLARADO EN EL REDUCER (auth: y product: ..))
 * En este caso, header llama al authReducer
 * @param {*} auth Representa la propiedad del reducer con los siguients valores:
 *                  * null cuando aun no hay respuesta
 *                  * false cuando el user no está logueado
 *                  * objeto de usuario cuando está autenticado.             
 */
function mapStateToProps({ drugstore }) {
    return { drugstore }
}


export default reduxForm({
    form: 'consultarDrogueria' // a unique identifier for this form
})(connect(
    mapStateToProps,
    { searchDrugstores } // Se coloca el método que realmente importa
)(ConsultarDrogueria));
