import React, { Component } from "react";
import './Component.css';

class Tag extends Component{
    state = {
        tags: [],
        liTag: ""
    }
    
    addTag = (e) => {
        if(e.key === "Enter"){
            let tag = e.target.value.replace(/\s+/g, ' ');
            if(tag.length > 1 && !this.state.tags.includes(tag)){
                this.state.tags.unshift(tag);
                this.createTag();
            }
            e.target.value = "";
        }
    }

    createTag = () => {        
        const ul = document.querySelector("ul");
        ul.querySelectorAll("li").forEach(li => li.remove());
        this.state.tags.forEach(el => {
            let liTag = document.createElement("li");
            liTag.innerHTML = el;
            let iTag = document.createElement("i");
            iTag.value = el;
            iTag.onclick = (e) => {
                let tag = e.target.value;
                let removedTags = this.state.tags;
                let index = removedTags.indexOf(tag);
                removedTags = [...removedTags.slice(0, index), ...removedTags.slice(index + 1)];
                this.setState({tags: removedTags});
                iTag.parentElement.remove();
            }
            liTag.appendChild(iTag);
            ul.insertAdjacentElement("afterbegin", liTag);
        })
    }

    render(){
        return(
            <div className="tag_box">
                <ul>
                    <input type="text" placeholder="Press enter to ad tags" onKeyPress={e => this.addTag(e)}/>
                </ul>               
            </div>
        );
    }
};
export default Tag;