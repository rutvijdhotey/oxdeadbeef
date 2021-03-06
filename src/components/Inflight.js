import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class Inflight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inflightInformation: props.inflightInformation
			//Enter the State of the Inflight Operations
		}
		
		setTimeout(function(){
             this.setState({
			  inflightInformation: {
				  vmWareAPICalls: {
					 "getVirtualDiskById()": 0,
					  "getVirtualMachineById()":0,
					  "getDatastoreByMoref()": 0,
					  "createSnapshot()": 5,
					  "deleteSnapshot()": 0,
					  "getAllDatastoresForVM()": 0,
					  "getEsxHostByMoref()": 0,
					  "powerOffVm()": 0,
					  "destroyVM()": 0,
					  "unregisterVM()": 0,
					  "setExtraConfigOptionsOnVM()": 0
				  },
				  scServerAPICalls: {
					  "createProtectionGroup()": 0,
					  "getProetctionGroupByNameOrId()": 1,
					  "getProtectionGroupByNameOrMoref()": 0,
					  "addPolicy()": 0,
					  "getPolicy()": 0,
					  "createBackup()": 10,
					  "getBackupDetails()": 0,
				      "getBackupDetails()": 0,
				      "getDatasetJobDetails()": 0
				  },
				  ontapZAPICalls: {
					  "createSnapshot()": 10
				  }
			  }
			});
        }.bind(this),3000);


		 setTimeout(function(){
             this.setState({
			  inflightInformation: {
				  vmWareAPICalls: {
					  "getVirtualDiskById()": 0,
					  "getVirtualMachineById()":0,
					  "getDatastoreByMoref()": 0,
					  "createSnapshot()": 0,
					  "deleteSnapshot()": 0,
					  "getAllDatastoresForVM()": 0,
					  "getEsxHostByMoref()": 0,
					  "powerOffVm()": 0,
					  "destroyVM()": 0,
					  "unregisterVM()": 0,
					  "setExtraConfigOptionsOnVM()": 0
				  },
				  scServerAPICalls: {
					  "createProtectionGroup()": 0,
					  "getProetctionGroupByNameOrId()": 0,
					  "getProtectionGroupByNameOrMoref()": 0,
					  "addPolicy()": 0,
					  "getPolicy()": 0,
					  "createBackup()": 5,
					  "getBackupDetails()": 0,
					  "getDatasetJobDetails()": 0,

				  },
				  ontapZAPICalls: {
					  "createSnapshot()": 0
				  }
			  }
			});
        }.bind(this),7000);

		 setTimeout(function(){
             this.setState({
			  inflightInformation: {
				  vmWareAPICalls: {
					  "getVirtualDiskById()": 0,
					  "getVirtualMachineById()":0,
					  "getDatastoreByMoref()": 0,
					  "createSnapshot()": 0,
					  "deleteSnapshot()": 0,
					  "getAllDatastoresForVM()": 0,
					  "getEsxHostByMoref()": 0,
					  "powerOffVm()": 0,
					  "destroyVM()": 0,
					  "unregisterVM()": 0,
					  "setExtraConfigOptionsOnVM()": 0
				  },
				  scServerAPICalls: {
					  "createProtectionGroup()": 0,
					  "getProetctionGroupByNameOrId()": 0,
					  "getProtectionGroupByNameOrMoref()": 0,
					  "addPolicy()": 0,
					  "getPolicy()": 0,
					  "createBackup()": 0,
					  "getBackupDetails()": 0,
					  "getDatasetJobDetails()": 0
				  },
				  ontapZAPICalls: {
					  "createSnapshot()": 0
				  }
			  }
			});
        }.bind(this),11000);
	}
	
	render() {

var listElementStyles = {
	paddingBottom :  '10px'
};
		
			var vmWareInfo = this.state.inflightInformation.vmWareAPICalls;
			const vmRows = Object.keys(vmWareInfo).map(function(keyName, keyIndex) {
				let inProgress = (vmWareInfo[keyName] != 0);
				console.log("IN PROGRESS: " + inProgress);
				console.log(keyName);
				return(
					<li style = {listElementStyles} key={"vmWare" + keyName}>{keyName} : <span style={{color: inProgress ? "red" : "green"}}> {inProgress ? vmWareInfo[keyName] + " in Progress" : "Finished" } </span> </li>
				);
		
			});
			
			var scInfo = this.state.inflightInformation.scServerAPICalls;
			const scRows = Object.keys(scInfo).map(function(keyName, keyIndex) {
				let inProgress = (scInfo[keyName] != 0);
				console.log("IN PROGRESS: " + inProgress);
				console.log(keyName);
				return(
					<li style = {listElementStyles} key={"vmWare" + keyName}>{keyName} : <span style={{color: inProgress ? "red" : "green"}}> {inProgress ? scInfo[keyName] + " in Progress" : "Finished" } </span> </li>
				);
		
			});
			
			var ontapInfo = this.state.inflightInformation.ontapZAPICalls;
			const ontapRows = Object.keys(ontapInfo).map(function(keyName, keyIndex) {
				let inProgress = (ontapInfo[keyName] != 0);
				console.log("IN PROGRESS: " + inProgress);
				console.log(keyName);
				return(
					<li style = {listElementStyles} key={"vmWare" + keyName}>{keyName} : <span style={{color: inProgress ? "red" : "green"}}> {inProgress ? ontapInfo[keyName] + " in Progress" : "Finished" } </span> </li>
				);
		
			}); 
		
		
		return (
			<div className = "inflightInformation">
				<h3>
					In-flight Operations
				</h3>
				
				<h4>
					VMware facing API Calls:
				</h4>
				
				<ul>
					{vmRows}
				</ul>
				
				<h4>
					SnapCenter Facing API Calls:
				</h4>
				
				<ul>
					{scRows}
				</ul>
				
				<h4>
					ONTAP Facing API Cslls:
				</h4>
				
				<ul>
					{ontapRows}
				</ul>
				
				
			</div>
			)
	}
}



export default Inflight;