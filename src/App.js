
import './App.css';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fullName: '',
       bio: '',
       imgSrc :'',
       profession :'',
       shows : false

    }
  }

  render(){
    
    return (
      <div className="App">
        
      </div>
    );
  }
  
}

export default App;
