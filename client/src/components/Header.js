import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Billing from './Billing';

class Header extends Component{
    renderContent(){
        switch(this.props.auth.auth){
            case null:
                return ; 
            case false:
                return   [
                            <li>
                                <a href="/auth/google">Login with Google</a>
                            </li>,
                            <li>
                                <a href="/auth/facebook">Login with Facebook</a>
                            </li>
                        ]
            default:
                return   [
                            <li key ="1">
                                <Billing/>
                            </li>,
                            <li key ="2" style={{margin:"0 10px"}}>
                                <span>Credits: {this.props.auth.auth.credits} </span>
                             </li>,
                            <li key="3">
                                <a href="/api/logout">Logout</a>
                            </li>
                        ]
                        
        }
    } 
    render(){
            return(
                <nav>
                    <div className="nav-wrapper">
                            <Link to={this.props.auth.auth?'/surveys':'/'} className="left brand-logo">
                                Emaily
                            </Link>
                            <ul className="right">
                                {this.renderContent()}  
                            </ul>   
                    </div>
                </nav>
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
function mapStateToProps(auth){
    return {auth }
}

export default connect(mapStateToProps)(Header);