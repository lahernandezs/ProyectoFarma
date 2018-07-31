import {FormControl,ControlLabel,FormGroup} from 'react-bootstrap';
import React,{Component} from 'react';

class WrappedFormControl extends Component{
    render(){
        const { placeholder, type, input, meta,validationType} = this.props;
        return(
            <FormGroup controlId={input.name} validationState={validationType}>
            <ControlLabel>{this.props.children}</ControlLabel>
            <FormControl type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
            <FormControl.Feedback />
          </FormGroup>
        );
    }
}

export default WrappedFormControl;
