import React, {Component} from 'react';
import Header from './components/Header'
import SearchBox from './components/SearchBox'
import Cardlist from './components/Cardlist'
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
       searchfield:'',
       robots:[]
    };
  }

  onSearchChange = (e) => {
    this.setState( {searchfield:e.target.value})
  }

componentDidMount(){fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>this.setState({robots:json}))
}


  render() {
    const filteredrobot= this.state.robots.filter(robots=>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return (
      <div>
        <Header/>
        <SearchBox SearchChange={this.onSearchChange}/>
        <Cardlist robots={filteredrobot}/>
      </div>
    )
  }
}

export default App;
