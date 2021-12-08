import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import Card from "./components/card/card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
