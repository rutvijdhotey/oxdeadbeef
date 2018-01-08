import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard'
import { render } from 'react-dom';
import { withRR4, Nav, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const SideNav = withRR4();
  
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
  
   renderDashboard = () => {
        return <Dashboard backupChartData = {this.state.backupChartData} mountChartData = {this.state.mountChartData} restoreChartData = {this.state.restoreChartData}/>;
    }

    renderInflight = () => {
        return <div>Inflight Operations</div>;
    }

    renderStatistics = () => {
        return <div>Statistics</div>;
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
            backgroundColor:
              'rgba(153, 102, 255, 0.6)'
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
            backgroundColor:'rgba(255, 99, 132, 0.6)'
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
            backgroundColor:'rgba(255, 206, 86, 0.6)'
            
          } 
        ]
      }
    });
  }
  
  

  render() {
    return (
		<Router>
			<div style={{display: 'flex', flexDirection: 'row'}}>
				<div style={{width: 220}}>
					<SideNav default='dashboard' highlightBgColor='blue' highlightColor='white'>
						<Nav id='dashboard'>
							<NavText>  Dashboard </NavText>
						</Nav>
						<Nav id='inflight'>
							<NavText> Inflight </NavText>
						</Nav>
						<Nav id='statistics'>
							<NavText>  Statistics </NavText>
						</Nav>
					</SideNav>
				</div>
				<div style={{padding: 20}}>
					<Route exact path="/dashboard" render={this.renderDashboard}/>
					<Route path="/sales" render={this.renderInflight}/>
					<Route path="/products" render={this.renderStatistics}/>
				</div>
			</div>
		</Router>
    );
  }
}

export default App;
