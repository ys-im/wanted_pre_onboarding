import React, {Component} from 'react';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      modalData: {
        buttonName: "Open Modal",
        content: "HELLO CODESTATES!"
      },
      
      tabList: [
        {title: "Tab1", content: "Tab menu ONE"},
        {title: "Tab2", content: "Tab menu TWO"},
        {title: "Tab3", content: "Tab menu THREE"}
      ],

      acList: ["antique", "vintage", "중고A급", "refurbished", "rustic"],
      
      cteList: ["이름", "나이"]
    };
  }

  render(){
    return (
      <div className="App">        
        <h2>1. Toggle</h2>
        <Toggle>
          {({checked, handleToggle}) => (
            <div className="container">
              <label className="switch">
                  <input type="checkbox" onClick={handleToggle}/>
                  <span className="slider round" ></span>
              </label>
              <p>{checked ? "Toggle Switch ON" : "Toggle Switch OFF"}</p>
            </div>
          )}
        </Toggle>

        <h2>2. Modal</h2>
        <div className="container">
          <Modal data={this.state.modalData}></Modal>
        </div>

        <h2>3. Tab</h2>
        <div className="tab">
          <Tab data={this.state.tabList}></Tab>
        </div>
        <div className="tabcontent">{this.state.tabList[0].content}</div>
      
        <h2>4. Tag</h2>
        <div className="container">
          <Tag></Tag>
        </div>

        <h2>5. AutoComplete</h2>
        <div className="container">
          <AutoComplete suggestions={this.state.acList}>
          </AutoComplete>
        </div>

        <h2>6. ClickToEdit</h2>
        <div className="container">
          <ClickToEdit cteData={this.state.cteList}>
          </ClickToEdit>
        </div>
      </div>
    );
  }
}

export default App;
