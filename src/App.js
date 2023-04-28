import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // calls underlying constructor method of any other classes you are extending from; here it extends from Component
    
    this.state = {
      monsters: [],
      searchString: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => { this.setState(() => {
          return { monsters: data }
        }, 
        () => { console.log('data: ', data, 'monsters: ', this.state)});
      })
  }

  // https://jsonplaceholder.typicode.com/users


  
  render() {  

    // const onSearchbarChange = (event) => {
    //   this.setState(() => {
    //         return { monsters: filteredMonsters }
    //       }, () => { console.log(this.state.monsters)});
    // }

    // (event) => {
    //   const searchString = event.target.value.toLowerCase();

    //   
    // remove all items from array that do not include the target value
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchString)
    });

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={(event) => {
            this.setState(() => {
              return { searchString: event.target.value }
            }, () => { console.log(this.state.searchString) });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <div key={monster.id} ><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
