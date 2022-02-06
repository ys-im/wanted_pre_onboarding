import React, { Component } from "react";
import './Component.css';

class Modal extends Component{

    isModalOpen = (isOpen) => {
        if(isOpen){
            document.getElementsByClassName("modal")[0].className += " show";
        }else{
            document.getElementsByClassName("modal")[0].className
                = document.getElementsByClassName("modal")[0].className.replace(" show", "");
        }

    }

    render(){
        let modalData = this.props.data;

        return (
            <div>
                <button className="button modal_btn" onClick={() => this.isModalOpen(true)}>
                    {modalData.buttonName}
                </button>
                <div className="modal">
                    <div className='modal_body'>                  
                        <div className="modal_close" onClick={() => this.isModalOpen(false)}></div>
                        <h3>{modalData.content}</h3>
                    </div>
                </div>
            </div>
        );
    }
};
export default Modal;