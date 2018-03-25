import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Landing from './Landing';
import Dashboard from './Dashboard';
 
const SurveyNew =   ()=><h2>SurveyNew</h2>

class App extends Component {
   
    componentDidMount(){
        this.props.fetchUser();
    }

    submit = values => {
        // print the form values to the console
        console.log(values)
      }
      
    render(){
        return(
            <div>
            <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/surveys" render={(props) => <Dashboard {...props} onSubmit={this.submit}/>}></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>
                    </div>
            </BrowserRouter>
            </div>
        );
    }
}


export default connect(null,actions)(App);