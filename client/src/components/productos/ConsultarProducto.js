import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducts } from '../../actions';
import { reduxForm } from 'redux-form';
import { Table, Button,Pager,PageHeader } from 'react-bootstrap';

/**
 * This class shows the list of products
 */
class ConsultarProducto extends Component {
    componentDidMount() {
        this.props.searchProducts();
    }
    eliminar(counter) {
        console.log("Se elimina " + counter);
    }

    renderContent() {
        var rows = [];
        var counter = 1;
        const valor = this.props.product;
        valor.forEach(value => {
            rows.push(
                <tr key={counter}>
                    <td>{value.productName}</td>
                    <td>{value.productPrice}</td>
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
                 <PageHeader> Productos <small> Gestión de Productos </small>   <Button href="/product/create">Crear Producto</Button></PageHeader>
               
                        <Table responsive>
                            <thead>
                                <tr>
                                    <td><b>Producto</b> </td>
                                    <td> <b>Precio</b></td>
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
function mapStateToProps({ product }) {
    return { product }
}


export default reduxForm({
    form: 'consultarProducto' // a unique identifier for this form
})(connect(
    mapStateToProps,
    { searchProducts } // Se coloca el método que realmente importa
)(ConsultarProducto));
