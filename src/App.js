import './App.css';
import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchInput} from './components/search-input/search-input.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(users => this.setState({monsters: users}));
}

handleChange = (e) => {
  this.setState({searchField: e.target.value})
}

render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(clown => 
      clown.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h2>Monsters-Rolodex</h2>
        <SearchInput 
          placeholder='search monster' 
          handle={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
