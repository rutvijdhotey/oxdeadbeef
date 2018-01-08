import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart'

class App extends Component {
  constructor() {
    super();
    this.state = {
      backupChartData: {},
      restoreChartData: {},
      mountChartData: {}
    }
  }

  componentWillMount() {
    this.getBackupChartData();
    this.getMountChartData();
    this.getRestoreChartData();
  }

//Setting the state of the backups whenever we need the top 10. We can use this function when we want the Inflight Details as well.
  getBackupChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      backupChartData: {
        labels : ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"],
        datasets: [ {
            label: "Backups",
            data: [
              100,200,321,153,299,198,200,232,212,311
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          } 
        ]
      }
    });
  }

  getMountChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      mountChartData: {
        labels : ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"],
        datasets: [ {
            label: "Mounts",
            data: [
              100,200,321,153,299,198,200,232,212,311
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          } 
        ]
      }
    });
  }

  getRestoreChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      restoreChartData: {
        labels : ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"],
        datasets: [ {
            label: "Restores",
            data: [
              100,200,321,153,299,198,200,232,212,311
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)'
            ]
          } 
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart backupChartData = {this.state.backupChartData}/>
      </div>
    );
  }
}

export default App;
