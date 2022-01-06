
import './App.css';
import { Component } from 'react';

class App extends Component {

  
    state = {
       fullName: 'Oni Usman Ademola',
       bio: 'A full stack student at Gomycode Nigeria',
       imgSrc :'',
       profession :'Full Stack Junior Developer',
       shows : false

    }

    display =() => {
      this.setState(prevState => {
        return {
          shows : prevState.shows === true? false : true
        }
      })
    }


  render(){
    if(this.state.shows === true){
      return (
        <div className="App">
            <button onClick = {this.display}>Log out</button>
            <h1>{this.state.fullName}</h1>
            <h1>{this.state.bio}</h1>
            <h1>{this.state.profession}</h1>
        </div>
      )
    }else{
      return (
        <div className="App">
          <button onClick = {this.display}>Log in</button>
          <h1>This user is not logged in </h1>
        </div>
      )
    }
    
    
  }
  
}

export default App;
