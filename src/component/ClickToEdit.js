import React, { Component, Fragment } from "react";
import './Component.css';
class ClickToEdit extends Component{
    render(){
        let printClickToEdit;
        // 타이틀배열 입력받아서
        // 클릭 1 포커스, 클릭 2 편집, 다른데 클릭-> 데이터 입력
        return(
            <Fragment>
                <div className="clicktoedit">
                    <label>이름</label>
                    <input type="text"/>
                </div>
                {printClickToEdit}
            </Fragment>
        );
    }
};
export default ClickToEdit;