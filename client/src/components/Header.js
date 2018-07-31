import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';

/**
 * Encabezado del menu
 * TODO: Colocar que se arme automático el menú
 */
class Header extends Component {
    renderContent() {
        switch (this.props.auth.authReducer) {
            case null:
                return;
            case false:
                return(
                    <Nav>
                        <NavItem eventKey={1} href="/auth/google">
                            Login with Google
                        </NavItem>
                        <NavItem eventKey={2} href="/auth/facebook">
                            Login with Facebook
                        </NavItem>
                    </Nav>);
            default:
                return(
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={3} title="Productos" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1} href="/product/create">Crear Productos</MenuItem>
                                <MenuItem eventKey={3.2} href="/product/select">Gestionar Laboratorios</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={4} title="Droguerías" id="basic-nav-dropdown">
                                <MenuItem eventKey={4.1} href="/drugstore/create">Crear Droguería</MenuItem>
                                <MenuItem eventKey={4.2} href="/drugstore/select">Gestionar Laboratorios</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={5} title="Laboratorios" id="basic-nav-dropdown">
                                <MenuItem eventKey={5.1} href="/laboratory/create">Crear Laboratorio</MenuItem>
                                <MenuItem eventKey={5.2} href="/laboratory/select">Gestionar Laboratorios</MenuItem>
                            </NavDropdown>
                        </Nav>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/api/logout">
                                Logout
                    </NavItem>

                        </Nav>
                    </Navbar.Collapse>
                );
        }
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/api/laboratories"><span className="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> FarmApp</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {this.renderContent()}
            </Navbar>

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
function mapStateToProps(auth) {
    return { auth }
}

export default connect(mapStateToProps)(Header);