import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing';
import RegistrarProducto from './productos/RegistrarProducto';
import ConsultarProducto from './productos/ConsultarProducto';
import RegistrarDrogueria from './droguerias/RegistrarDrogueria';
import ConsultarDrogueria from './droguerias/ConsultarDrogueria';
import RegistrarLaboratorio from './laboratorios/RegistrarLaboratorio';
import ConsultarLaboratorio from './laboratorios/ConsultarLaboratorio';

const SurveyNew =   ()=><h2>SurveyNew</h2>

class App extends Component {
   
    componentDidMount(){
        this.props.fetchUser();
    }
      
    render(){
        return(
            <div>
            <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/product/create" component={RegistrarProducto}></Route>
                        <Route exact path="/product/select" component={ConsultarProducto}></Route>
                        <Route exact path="/drugstore/create" component={RegistrarDrogueria}></Route>
                        <Route exact path="/drugstore/select" component={ConsultarDrogueria}></Route>
                        <Route exact path="/laboratory/create" component={RegistrarLaboratorio}></Route>
                        <Route exact path="/laboratory/select" component={ConsultarLaboratorio}></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>
                    </div>
            </BrowserRouter>
            </div>
        );
    }
}


export default connect(null,actions)(App);