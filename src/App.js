import React, { Component } from 'react';
import DataChart from './components/datachart'
import CrosshairChart from './components/crosshair'
import './App.css';
import '../node_modules/react-vis/dist/style.css';


const API_URL = "https://nataliia-radina.github.io/react-vis-example/";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
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
        data: [response.results.filter(r => {
          return r.name === 'JavaScript';
        }).map(d => {
          return {x: d.year + '/' + d.quarter,
      y: parseFloat(d.count/1000)}
      }),
        response.results.filter(r => {
          return r.name === 'Java';
        }).map(d => {
          return {x: d.year + '/' + d.quarter,
      y: parseFloat(d.count/1000)}
      })
    ]
      }))

     
      
      
  }


  
  render() {

    return (
      <div className="App">
      <h1 className="main-title">chart</h1>
    
        <CrosshairChart/>
        <DataChart data={this.state.data}/>

      </div>
    );
  }
}

export default App;