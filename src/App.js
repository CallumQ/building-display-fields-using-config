import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      fields:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:3001/personalDetails")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState({item:json})
      this.parseObject();
    })}

    parseObject(){
      let fields = this.state.item;
      let fieldComponents = [];
      
      for(var field in fields){
        let currentObject;
        let fieldConfig = fields[field];
        
        currentObject = <Input placeholder={fieldConfig.placeholder}/>
        
        console.log(currentObject);
        
        fieldComponents.push(currentObject);
      }

      this.setState({fields:fieldComponents});
    }
    
  render() {
    return (
      <div className="App">
         {this.state.fields.map(item => item)}
      </div>
    );
  }
}

export default App;
