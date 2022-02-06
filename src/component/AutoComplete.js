import React, { Component, Fragment } from "react";
import './Component.css';
class AutoComplete extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        }
    }

    onChange = (e) => {
        const { suggestions } = this.props;
        const userInput = e.target.value;
        
        const filteredSuggestions = suggestions.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.target.value
        });

        if(filteredSuggestions.length > 0 && userInput != ""){
            e.target.parentElement.className += " active";
        }else{            
            e.target.parentElement.className = e.target.parentElement.className.replace(" active", "");
        }
    }

    onKeyDown = (e) => {
        if(e.keyCode === 13){ //enter
            this.setState({
                showSuggestions: false
            });
        }
    }

    onClick = (e) => {
        this.setState({
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.target.innerText
        });
    }    

    render(){
        const {
            onClick,
            state: {
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if(showSuggestions && userInput){
            if(filteredSuggestions.length){
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className = "suggestion";
                            return (
                                <li className={className} key={suggestion} onClick={onClick}>
                                    {suggestion}
                                </li>   
                            );
                        })}
                    </ul>
                );

            }
        }

        const clearInput = (e) => {
            e.target.parentElement.className = e.target.parentElement.className.replace(" active", "");
            this.setState({showSuggestions: false, userInput: ""});
        }

        return(
            <Fragment>
                <div className="autocomplete_box">
                    <input type="text" 
                        onChange={e => this.onChange(e)}
                        onClick={e => this.onClick(e)}
                        value={this.state.userInput}
                    />
                    <div className="xmark" onClick={e => clearInput(e)}></div>
                </div>
                {suggestionsListComponent}
            </Fragment>
        );
    }
};
export default AutoComplete;