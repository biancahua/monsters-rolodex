import { Component } from 'react';  
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx'
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

  onSearchChange = (event) => {
    this.setState(() => {
      return { searchString: event.target.value.toLowerCase() }
    });
  }

  
  render() {  

    const { searchString, monsters } = this.state;
    const { onSearchChange } = this;
     
    // remove all items from array that do not include the target value
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString)
    });

    return (
      <div className="App">
        <div className='app-header'>Monsters Rolodex</div>
        <SearchBox className='search-box' type='search' placeholder='search monsters' onSearchChange={onSearchChange} />
        {/* <input 
          className="search-box" 
          type="search" 
          placeholder="search monsters" 
          onChange={onSearchChange}
        /> */}
        {/* {filteredMonsters.map((monster) => {
          return <div key={monster.id} ><h1>{monster.name}</h1></div>
        })} */}
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
