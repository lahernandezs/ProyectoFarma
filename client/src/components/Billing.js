import React,{Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Billing extends Component{
   // debugger; <- Statement para debuggear.
    render(){
        return(
            <StripeCheckout 
                name= "Emaily"
                description="500 CLP por 5 Emails"
                amount = {500}
                token = {token=>this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
                currency= "USD">
                <button className="btn btn-outline-success my-2 my-sm-0 pull-right" type="submit">
                Buy Credits
                </button>
            </StripeCheckout>          
        );
    }
}
export default connect(null,actions)(Billing);