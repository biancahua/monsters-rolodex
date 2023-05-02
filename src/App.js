// import { Component } from 'react';  // for Class Components
import { useState, useEffect } from 'react'; // for functional components
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx'
import './App.css';



// FUNCTIONAL COMPONENT do not need lifecycle methods or render
const App = () => {
  const [ searchField, setSearchField ] = useState(''); // [ value we want to store, setState for that value ]
  const [ monsters, setMonsters ] = useState([]); 
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);
  
  // console.log('render');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setMonsters(data))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);

    // console.log('effect is firing');
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <div className='app-header'>Monsters Rolodex</div>
      <SearchBox className='search-box' type='search' placeholder='search monsters' onSearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}


// CLASS COMPONENT
// class App extends Component {
//   constructor() {
//     super(); // calls underlying constructor method of any other classes you are extending from; here it extends from Component
    
//     this.state = {
//       monsters: [],
//       searchString: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => { this.setState(() => {
//           return { monsters: data }
//         }, 
//         () => { console.log('data: ', data, 'monsters: ', this.state)});
//       })
//   }

//   // https://jsonplaceholder.typicode.com/users

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return { searchString: event.target.value.toLowerCase() }
//     });
//   }

  
//   render() {  

//     const { searchString, monsters } = this.state;
//     const { onSearchChange } = this;
     
//     // remove all items from array that do not include the target value
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString)
//     });

//     return (
//       <div className="App">
//         <div className='app-header'>Monsters Rolodex</div>
//         <SearchBox className='search-box' type='search' placeholder='search monsters' onSearchChange={onSearchChange} />
//         {/* <input 
//           className="search-box" 
//           type="search" 
//           placeholder="search monsters" 
//           onChange={onSearchChange}
//         /> */}
//         {/* {filteredMonsters.map((monster) => {
//           return <div key={monster.id} ><h1>{monster.name}</h1></div>
//         })} */}
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
