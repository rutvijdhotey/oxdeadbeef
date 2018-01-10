import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Inflight from './components/Inflight';
import MemoryStats from './components/MemoryStats';
import Statistics from './components/Statistics';
import ChartDetails from './ChartDetails';
import { render } from 'react-dom';
import { withRR4, Nav, NavText } from 'react-sidenav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import Iframe from 'react-iframe'
import eintstein from './images/einstein.jpg'

const SideNav = withRR4();
  
class App extends Component {
  constructor() {
    super();
    this.state = {
      backupVmChartData: {},
      restoreVmChartData: {},
      backupVmdkChartData: {},
      restoreVmdkChartData: {},
      performanceChartData: {},
      inflightInformation: {},
      resourceUtilization: {}
    }
  }
  

  componentWillMount() {
    this.getBackupVmChartData();
    this.getBackupVmdkChartData();
    this.getRestoreVmChartData();
    this.getRestoreVmdkChartData();
    this.getPerformanceChartData();
	this.getRGBackupChartData();
	this.getStatistics();
	this.getRGBackupChartData();
    this.getInflightInformation();
    this.getResourceUtilization();
  }
  
   renderDashboard = () => {

        return <Dashboard performanceChartData = {this.state.performanceChartData} backupVmChartData = {this.state.backupVmChartData} restoreVmChartData = {this.state.restoreVmChartData} restoreVmdkChartData = {this.state.restoreVmdkChartData} backupVmdkChartData = {this.state.backupVmdkChartData}/>;
    }

    renderInflight = () => {
        return <Inflight inflightInformation = {this.state.inflightInformation} />;
    }

    renderMemoryStats = () => {
        return <MemoryStats resourceUtilization = {this.state.resourceUtilization}/>;
    }

    renderStatistics = () => {
        return <Statistics scvStatistics = {this.state.scvStatistics} serverStatistics = {this.state.serverStatistics} ontapStatistics = {this.state.ontapStatistics}/>;
    }


    renderApiDocs = () => { //Replace with Swagger
        return <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>;
    }

    renderAbout = () => {
        return <div>
				<h3>Einstein Version 1.0  &copy;</h3>
				<h4>SnapCenter Server Version 4.0.0.465</h4>
				<h4>SnapCenter Plug-in for VMware vSphere Version 4.0.0.465</h4>

				</div>;
    }
	
	renderChartDetails = () => {
        return <ChartDetails/>;
    }

getResourceUtilization() {
    //Make the AJAX CALL HERE
    this.setState({
      resourceUtilization: {
        labels : ["b1","b2","b3","b4","b5","b6","b10"],
        datasets: [
          // Add the data for the Performance here
          {label: "restoreVmdkChartData",
            data: [265, 259, 280, 281, 256, 255, 240,212,232,243,211,212,213,215,215,213,215],
            fill: true,
            borderColor: 'red'
          },
          {label: "restoreVmChartData",
            data: [28, 48, 40, 19, 86, 27, 211,211,312,313,315,315,313,315],
            fill: true,
            borderColor: 'green'
          }
        ]
      }
    });
  }


//Setting the state of the backups whenever we need the top 10. We can use this function when we want the Inflight Details as well.
  

  getPerformanceChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      performanceChartData: {
        labels : ["11/20/2017","11/27/2017","12/4/2017","12/11/2017","12/18/2017","12/25/2017","1/1/2018","1/8/2018"],
        datasets: [
          // Add the data for the Performance here
          {label: "Restore VMDK",
            data: [, ,99,99, 102,,],
            fill: false,
            borderColor: '#ff6666'
          },
          {label: "Restore VM",
            data: [,77, 77, 77, 78,,],
            fill: false,
            borderColor: '#66b3ff'
          },
          {label: "Backup VMDK",
            data: [44, 44, 45, 47, 47, 47, 47,48],
            fill: false,
            borderColor: '#ffb84d'
          },
          {label: "Backup VM",
            data: [56, 57, 57, 62, 65, 67, 67,68],
            fill: false,
            borderColor: '#66cc66'
          }
        ]
      }
    });
  }
  
  getStatistics() {
	this.setState({
      scvStatistics: [{
		counter: 'apivmpowerOff()',
		numberOfTimes: 3,
		average: 51,
		median: 12
	  },{
		counter: 'Unregister virtual machine',
		numberOfTimes: 4,
		average: 10,
		median: 20
	  },{
		counter: 'Register virtual machine',
		numberOfTimes: 3,
		average: 20,
		median: 30
	  },{
		counter: 'Reconfigure virtual machine',
		numberOfTimes: 6,
		average: 16,
		median: 26
	  },{
		counter: 'Power On virtual machine',
		numberOfTimes: 1,
		average: 2,
		median: 3
	  }],
	  serverStatistics: [{
		counter: 'Discovering resources',
		numberOfTimes: 2,
		average: 37,
		median: 56
	  },{
		counter: 'Prescripts',
		numberOfTimes: 4,
		average: 47,
		median: 57
	  },{
		counter: 'Postscripts',
		numberOfTimes: 3,
		average: 32,
		median: 46
	  }],
	  ontapStatistics: [{
		counter: 'Creating snapshot',
		numberOfTimes: 2,
		average: 37,
		median: 56
	  }]
	  
    });
  }
  
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
            backgroundColor:'#66cc66'
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
              10,223,311,153,29
            ],
            backgroundColor:'#ffb84d'
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
              30,212,412,123,123
            ],
            backgroundColor:'#66b3ff'
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
              331,412,231,112,454
            ],
            backgroundColor:'#ff6666'
            
          } 
        ]
      }
    });
  }
  
  getRGBackupChartData() {
	  this.setState({
		  rgBackupChartData: {
			  RG1: {
				  DatastoreData: {
					  labels : ["DS1","DS2","DS3","DS4","DS5"],
					  datasets: [ {
						label: "top5DSData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM1","VM2","VM3","VM4","VM5"],
					  datasets: [ {
						label: "top5VMData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG2: {
				  DatastoreData: {
					  labels : ["DS1","DS2","DS3","DS4","DS5"],
					  datasets: [ {
						label: "top5DSData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM1","VM2","VM3","VM4","VM5"],
					  datasets: [ {
						label: "top5VMData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG3: {
				  DatastoreData: {
					  labels : ["DS1","DS2","DS3","DS4","DS5"],
					  datasets: [ {
						label: "top5DSData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM1","VM2","VM3","VM4","VM5"],
					  datasets: [ {
						label: "top5VMData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG4: {
				  DatastoreData: {
					  labels : ["DS1","DS2","DS3","DS4","DS5"],
					  datasets: [ {
						label: "top5DSData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM1","VM2","VM3","VM4","VM5"],
					  datasets: [ {
						label: "top5VMData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG5: {
				  DatastoreData: {
					  labels : ["DS1","DS2","DS3","DS4","DS5"],
					  datasets: [ {
						label: "top5DSData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM1","VM2","VM3","VM4","VM5"],
					  datasets: [ {
						label: "top5VMData",
						data: [
						  130,200,321,153,299
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  }
			  
		  }
	  });
  }
  
  getInflightInformation() {
    //Make the AJAX CALL HERE
    this.setState({
      inflightInformation: {
          vmWareAPICalls: {
			  "get-VirtualDiskById()": 0,
			  "get-VirtualMachineById()":0,
			  "get-DatastoreByMoref()": 0,
			  "createSnapshot()": 5,
			  "deleteSnapshot()": 0
		  },
		  scServerAPICalls: {
			  "createProtectionGroup()": 0,
			  "getProetctionGroupByNameOrId()": 1,
			  "getProtectionGroupByNameOrMoref()": 0,
			  "addPolicy()": 0,
			  "getPolicy()": 0,
			  "createBackup()": 10,
			  "getBackupDetails()": 0
		  },
		  ontapZAPICalls: {
			  "createSnapshot()": 10
		  }
      }
    });
  }

  render() {
    var navStyle = {
      backgroundColor: 'white'
    }

    var imgStyle = {
      width: '85px',
      height: '85px'
    }
        var dashboardStyle = {
            width : '80%',
            float: 'right',
            paddingLeft: '21px',
            paddingTop: '10px',
            height: '1400px'
        };

        var dashboardPanelStyle = {
          //background: '#304352',  /* fallback for old browsers */

//background: '-webkit-linear-gradient(to bottom, #d7d2cc, #304352)',  /* Chrome 10-25, Safari 5.1-6 */

//background: 'linear-gradient(to bottom, #d7d2cc, #304352)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


            width : '16%',
            marginRight: '0px',
            margin: '0px',
            clear: 'both',
            height: '230%',
            color: 'black',
            position: 'absolute',
            border: '2px solid black',
            
         };

    return (
		<Router>
		  <Container>
			<Row>
			  <Col sm="2" >

				<div style={dashboardPanelStyle}>
        <div style = {{marginBottom: '30px', paddingTop: '20px' , fontFamily: 'monospace', paddingLeft: '15px' , color: 'black', fontSize: '30px', paddingBottom: '10px', backgroundColor: 'white'}}>

          <img style = {imgStyle} src={eintstein} alt="eintstein" />
   

         Einstein </div>
				  <SideNav   default='dashboard' highlightBgColor='black' highlightColor='white'>
					<Nav id='dashboard'>
					  <NavText>  Dashboard </NavText>
					</Nav>
					<Nav id='inflight'>
					  <NavText> In-flight </NavText>
					</Nav>
					<Nav id='statistics'>
					  <NavText>  Statistics </NavText>
					</Nav>
					<Nav id='memoryStats'>
					  <NavText>  Resource Utilization </NavText>
					</Nav>
					<Nav id='apiDocs'>
					  <NavText>  API Docs </NavText>
					</Nav>
					<Nav id='about'>
					  <NavText>  About </NavText>
					</Nav>
				  </SideNav>
			   </div>
			  </Col>
			  <Col sm="10">
				<div style={dashboardStyle}>
				  <Route exact path="/dashboard" render={this.renderDashboard}/>
				  <Route path="/inflight" render={this.renderInflight}/>
				  <Route path="/memoryStats" render={this.renderMemoryStats}/>
				  <Route path="/statistics" render={this.renderStatistics}/>
				  <Route path="/apiDocs" render={this.renderApiDocs}/>
				  <Route path="/about" render={this.renderAbout}/>
				  <Route path="/chartDetails" render={(props) => (
					<ChartDetails style= {{width: '100%'}} rgBackupChartData = {this.state.rgBackupChartData} {...props} />
				  )}/>
				</div>
			  </Col>
			</Row>
		  </Container>
		</Router>
    );
  }
}

export default App;
