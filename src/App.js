import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Inflight from './components/Inflight';
import ChartDetails from './ChartDetails';
import { render } from 'react-dom';
import { withRR4, Nav, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const SideNav = withRR4();
  
class App extends Component {
  constructor() {
    super();
    this.state = {
      backupVmChartData: {},
      restoreVmChartData: {},
      backupVmdkChartData: {},
      restoreVmdkChartData: {},
      performanceChartData: {}
    }
  }
  

  componentWillMount() {
    this.getBackupVmChartData();
    this.getBackupVmdkChartData();
    this.getRestoreVmChartData();
    this.getRestoreVmdkChartData();
    this.getPerformanceChartData();
  }
  
   renderDashboard = () => {

        return <Dashboard performanceChartData = {this.state.performanceChartData} backupVmChartData = {this.state.backupVmChartData} restoreVmChartData = {this.state.restoreVmChartData} restoreVmdkChartData = {this.state.restoreVmdkChartData} backupVmdkChartData = {this.state.backupVmdkChartData}/>;
    }

    renderInflight = () => {
        return <Inflight/>;
    }

    renderStatistics = () => {
        return <div>Statistics</div>;
    }
	
	renderChartDetails = () => {
        return <ChartDetails/>;
    }

//Setting the state of the backups whenever we need the top 10. We can use this function when we want the Inflight Details as well.
  getBackupVmChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      backupVmChartData: {
        labels : ["b1","b2","b3","b4","b5"],
        datasets: [ {
            label: "backupVmChartData",
            data: [
              130,200,321,153,299
            ],
            backgroundColor:
              'rgba(153, 102, 255, 0.6)'
          } 
        ]
      }
    });
  }

  getPerformanceChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      performanceChartData: {
        labels : ["b1","b2","b3","b4","b5","b6","b10"],
        datasets: [
          // Add the data for the Performance here
          {data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'red'
          },
          {data: [28, 48, 40, 19, 86, 27, 90],
            fill: false,
            borderColor: 'green'
          },
          {data: [11, 4, 43, 9, 6, 2, 92],
            fill: false,
            borderColor: 'brown'
          },
          {data: [8, 12, 4, 9, 34, 7, 9],
            fill: false,
            borderColor: 'blue'
          }
        ]
      }
    });
  }

  getBackupVmdkChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      backupVmdkChartData: {
        labels : ["b1","b2","b3","b4","b5",],
        datasets: [ {
            label: "backupVmdkChartData",
            data: [
              130,200,321,153,299
            ],
            backgroundColor:
              'rgba(153, 102, 255, 0.6)'
          } 
        ]
      }
    });
  }

  getRestoreVmChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      restoreVmChartData: {
        labels : ["b1","b2","b3","b4","b5"],
        datasets: [ {
            label: "restoreVmChartData",
            data: [
              130,200,321,153,299
            ],
            backgroundColor:'rgba(255, 99, 132, 0.6)'
          } 
        ]
      }
    });
  }

  getRestoreVmdkChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      restoreVmdkChartData: {
        labels : ["b1","b2","b3","b4","b5"],
        datasets: [ {
            label: "restoreVmdkChartData",
            data: [
              130,200,321,153,299
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
			<div style={{display: 'flex', flexDirection: 'row', backgroundColor: 'grey'}}>
				<div style={{width: 550, backgroundColor: 'grey'}}>
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
				<div style={{padding: 20, backgroundColor: 'grey'}}>
					<Route exact path="/dashboard" render={this.renderDashboard}/>
					<Route path="/inflight" render={this.renderInflight}/>
					<Route path="/products" render={this.renderStatistics}/>
					<Route path="/chartDetails" render={this.renderChartDetails}/>
				</div>
			</div>
		</Router>
    );
  }
}

export default App;
