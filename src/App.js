import { Component } from 'react';  
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // calls underlying constructor method of any other classes you are extending from; here it extends from Component
    
    this.state = {
      monsters: [],
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
    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={(e) => {
            this.state.monsters.filter(() => {
              // remove all items from array that do not include the target value

            })
            console.log(e.target.value)
          }}
        />
        {this.state.monsters.map((monster) => {
          return <div key={monster.id} ><h1>{monster.name}</h1></div>
        })}
      </div>
    );
  }
}

export default App;
