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
            data: [, ,54,56, 56,,],
            fill: false,
            borderColor: '#ff6666'
          },
          {label: "Restore VM",
            data: [,65, 65, 68, 78,,],
            fill: false,
            borderColor: '#66b3ff'
          },
          {label: "Discovery VMDK",
            data: [4, 4, 5, 7, 7, 7, 7, 8],
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
		counter: 'powerOffVm()',
		numberOfTimes: 3,
		average: 178,
		median: 178
	  },{
		counter: 'unregisterVm()',
		numberOfTimes: 9,
		average: 580,
		median: 600
	  },{
		counter: 'registerVM()',
		numberOfTimes: 9,
		average: 498,
		median: 490
	  },{
		counter: 'reconfigVm()',
		numberOfTimes: 6,
		average: 1120,
		median: 1056
	  },{
		counter: 'powerOnVm()',
		numberOfTimes: 3,
		average: 800,
		median: 780
	  },{
    counter: 'destroyVm()',
    numberOfTimes: 4,
    average: 495,
    median: 514
    },{counter: 'createSnapshot()',
    numberOfTimes: 9,
    average: 15010,
    median: 15145
    },{counter: 'getDatastoreByMoref()',
    numberOfTimes: 6,
    average: 678,
    median: 702
    },{counter: 'getEntitiesByMoref()',
    numberOfTimes: 15,
    average: 5640,
    median: 5708
    },{counter: 'getDatacenterList()',
    numberOfTimes: 6,
    average: 4032,
    median: 4203
    },{counter: 'getSpanningDatastoreList()',
    numberOfTimes: 6,
    average: 234,
    median: 290
    },
    ,{counter: 'getVirtualMachineById()',
    numberOfTimes: 23 ,
    average: 356,
    median: 321
    },{counter: 'getVirtualDiskById()',
    numberOfTimes: 14,
    average: 574,
    median: 521
    }],
	  serverStatistics: [{
		counter: 'createProtectionGroup()',
		numberOfTimes: 6,
		average: 6144,
		median: 6205
	  },{
    counter: 'getProetctionGroupByNameOrId()',
    numberOfTimes: 2,
    average: 6004,
    median: 6106
    },{
    counter: 'getProtectionGroupByNameOrMoref()',
    numberOfTimes: 2,
    average: 2117,
    median: 2201
    },{
    counter: 'addPolicy()',
    numberOfTimes: 3,
    average: 3012,
    median: 3149
    },{
    counter: 'getPolicy()',
    numberOfTimes: 6,
    average: 8845,
    median: 8804
    },{
    counter: 'createBackup()',
    numberOfTimes: 9,
    average: 20456,
    median: 21006
    },{
    counter: 'getBackupDetails()',
    numberOfTimes: 2,
    average: 6561,
    median: 6780
    },{
    counter: 'restoreFile()',
    numberOfTimes: 9,
    average: 65784,
    median: 68477
    }],
	  ontapStatistics: [{
		counter: 'create-snapshot',
		numberOfTimes: 9,
		average: 'xxxxxx',
		median: 'xxxxx'
	  }]
	  
    });
  }
  
getBackupVmChartData() {
    //Make the AJAX CALL HERE
    this.setState({
      backupVmChartData: {
        labels : ["RG_01","RG_02","RG_03","RG_04","RG_05"],
        datasets: [ {
            label: "Backup Time",
            data: [
              24,21,26,30,27
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
        labels : ["VM_02.vmdk","VM_03.vmdk","VM_06.vmdk","VM_01.vmdk","VM_11.vmdk"],
        datasets: [ {
            label: "Discovery Time",
            data: [
              5,6,7,4,8
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
        labels : ["VM_03","VM_09","VM_13","VM_04","VM_07"],
        datasets: [ {
            label: "Restore Time",
            data: [
              78,84,65,78,91
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
        labels : ["VM_12.vmdk","VM_03.vmdk","VM_07.vmdk","VM_01.vmdk","VM_43.vmdk"],
        datasets: [ {
            label: "Restore Time",
            data: [
              54,51,65,49,51
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
			  RG_01: {
				  DatastoreData: {
					  labels : ["DS_1","DS_2","DS_3","DS_4","DS_5"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  13,20,21,13,29
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM_01","VM_02","VM_03","VM_04","VM_05"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  12,20,11,15,21
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG_02: {
				  DatastoreData: {
					  labels : ["DS_10","DS_11","DS_12",,],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  13,28,21,,,
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM_02","VM_04","VM_05", , ],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  21 ,12 ,22, 18, 24
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG_03: {
				  DatastoreData: {
					  labels : ["DS_13","DS_5", , , ],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  23,23, , , 
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM_11","VM_21","VM_03","VM_31"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  15,25,21,27,
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG_04: {
				  DatastoreData: {
					  labels : ["DS_1","DS_2","DS_3","DS_4","DS_5"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  21,17,16,20,17
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM_01","VM_02","VM_03","VM_04","VM_05"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  19,25,29,27,21
						],
						backgroundColor:
						  'rgba(153, 102, 255, 0.6)'
					    } 
					  ]
				  }
			  },
			  RG_05: {
				  DatastoreData: {
					  labels : ["DS_1","DS_2","DS_3","DS_4",],
					  datasets: [ {
						label: "Backup Time",
						data: [
						 12,17,16,20,
						],
						backgroundColor:
						  '#00b300'
					    } 
					  ]
				  },
				  
				  VmData: {
					  labels : ["VM_01","VM_02","VM_03","VM_04","VM_05"],
					  datasets: [ {
						label: "Backup Time",
						data: [
						  18,17,16,26,24
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
			  
		  },
		  scServerAPICalls: {
			  
		  },
		  ontapZAPICalls: {
			  
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
            position: 'fixed',
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
