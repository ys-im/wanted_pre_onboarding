import React, { Component } from "react";
import './Component.css';

class Toggle extends Component {   
    state = {
        checked: false
    };
    
    handleToggle = () => {
        this.setState({
            checked: !this.state.checked
        });
    }
    
    render(){
        const { children } = this.props;

        return children({
            checked: this.state.checked,
            handleToggle: this.handleToggle
        });
    }
};
export default Toggle;