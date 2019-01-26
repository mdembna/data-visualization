import React, { Component } from 'react';
import Chart from './components/chart'
import './App.css';
import '../node_modules/react-vis/dist/style.css';

const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: [],
      java: [],
    }
  }

  componentDidMount(){
    fetch(API_URL)
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        else {
          throw new Error('something went wrong!')
        }
      })
      .then(response => this.setState({
        results: response.results.filter(r => {
          return r.name === 'JavaScript';
        }),
        java: response.results.filter(r => {
          return r.name === 'Java';
        })
      }))
  }


  
  render() {

    
    const {results} = this.state;
    const {java} = this.state;
    return (
      <div className="App">
        <Chart data={results} java={java}/>

      </div>
    );
  }
}

export default App;