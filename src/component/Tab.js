import React, { Component } from "react";
import './Component.css';

class Tab extends Component{

    tabChange = (e) => {
        let i, tablinks, tabcontent;

        tablinks = document.getElementsByClassName("tablinks");
        for(i = 0; i < tablinks.length; i++){
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementsByClassName("tabcontent")[0].style.display = "block";

        tabcontent = this.props.data.filter((el) => 
            e.target.name === el.title
        );      
        document.getElementsByClassName("tabcontent")[0].innerHTML = tabcontent[0].content;
        
        e.target.className += " active";
    };
    
    render(){
        let tabList = [];
        let tabData = this.props.data;
        let i = 0;
        while(i < tabData.length){
            const defaultTab = (i===0 ? "tablinks active" : "tablinks");
            tabList.push(
                <button key={tabData[i].title}
                        name={tabData[i].title}
                        className={defaultTab}
                        onClick={e => this.tabChange(e)}>
                    {tabData[i].title}
                </button>
            );
            i++;
        }

        return (
            <div>
                {tabList}
            </div>
        );
    }
};
export default Tab;