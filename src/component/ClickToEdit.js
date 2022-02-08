import React, { Component, Fragment } from "react";
import './Component.css';
class ClickToEdit extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            userInput: []
        }
    }

    componentDidMount = () => {
        document.addEventListener("mousedown", this.onClick);
    }

    componentWillUnmount = () => {
        document.removeEventListener("mousedown", this.onClick);
    }

    onClick = (e) => {
        let inputNodes = document.querySelectorAll(".clicktoedit input");
        let isClikedOutSide = true;
        
        let userInputs = [];
        var i = 0;
        for(i = 0; i < inputNodes.length; i++){
            userInputs.push([this.props.cteData[i], inputNodes[i].value]);
            if(e.target === inputNodes[i]){
                isClikedOutSide = false;
                if(e.target.className === "focus"){
                    e.target.readOnly = false;
                }else{
                    e.target.readOnly = true;
                }
    
                for(var j = 0; j < inputNodes.length; j++){
                    inputNodes[j].classList.remove("focus");
                }
                e.target.className = "focus";
            }
        }

        this.setState({
            userInput: userInputs
        });

        if(isClikedOutSide){
            i = 0;
            for(i = 0; i < inputNodes.length; i++){
                inputNodes[i].classList.remove("focus");
                inputNodes[i].readOnly = true;
            }
        }
    }
    
    render(){
        const {
            state: {
                userInput
            }
        } = this;

        let printClickToEdit = [];
        let cteData = this.props.cteData;
        for(var i = 0; i < cteData.length; i++){
            printClickToEdit.push(
                <div key={"div_"+i} className="clicktoedit" >
                    <label key={"label_"+i}>{cteData[i]}</label>
                    <input key={"input_"+i} type="text" readOnly />
                </div>
            );
        }
        let printInputResult;
        printInputResult = (
            <div key="printInputResult">
                {userInput.map((element) => {
                    return (element[1] !== "" ? 
                        <span key={element}>{element[0]} {element[1]} </span>
                        : ""
                    );
                })}
            </div>
        );

        return(
            <Fragment>
                {printClickToEdit}
                {printInputResult}
            </Fragment>
        );
    }
};
export default ClickToEdit;