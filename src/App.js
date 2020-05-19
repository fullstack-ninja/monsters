import React, { Component } from "react";

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
    .then(res => res.json())
    .then(res => this.setState({ monsters: res}));
  }

  onSearchChange = ev => {
    this.setState({ searchfield: ev.target.value })
  }
  
  render() {
    return (
      <div className='App'>
      <SearchBox onChange={this.onSearchChange}/>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
