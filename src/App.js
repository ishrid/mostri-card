import "./App.css";

import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.components";
import {SearchBox } from './components/search-box/search-box.componets'


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
    
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e)  => {
    this.setState({searchField: e.target.value})
  }


  render() {
    const { monsters, searchField} = this.state;
    const filterdMosters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));     

    return (
      <div className="App">
      <h1>Mostri Card</h1>
        <SearchBox 
        placeholder="Cerca Mostro" 
        handleChange={this.handleChange}
        />

        <CardList monsters = {filterdMosters} /> 
      </div>
    );
  }
}

export default App;
