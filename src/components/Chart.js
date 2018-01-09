import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'
import { withRouter } from 'react-router-dom'

class Chart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			backupVmChartData: props.backupVmChartData,
			restoreVmChartData: props.restoreVmChartData,
			backupVmdkChartData: props.backupVmdkChartData,
			restoreVmdkChartData: props.restoreVmdkChartData,
			performanceChartData: props.performanceChartData
		}
		
		this.handleBackupVMChartClick = this.handleBackupVMChartClick.bind(this);
		this.handleBackupVMDKChartClick = this.handleBackupVMDKChartClick.bind(this);
		this.handleRestoreVMChartClick = this.handleRestoreVMChartClick.bind(this);
		this.handleRestoreVMDKChartClick = this.handleRestoreVMDKChartClick.bind(this);
		
	}
	
	handleBackupVMChartClick(e){
		this.props.history.push({
			pathname: '/chartDetails',
			state: {type: "BackupVM"}
			});
	}
	
	handleBackupVMDKChartClick(e){
		this.props.history.push({
			pathname: '/chartDetails',
			state: {type: "BackupVMDK"}
			});
	}
	
	handleRestoreVMChartClick(e){
		this.props.history.push({
			pathname: '/chartDetails',
			state: {type: "RestoreVM"}
			});
	}
	handleRestoreVMDKChartClick(e){
		this.props.history.push({
			pathname: '/chartDetails',
			state: {type: "RestoreVMDK"}
			});
	}
	
	
	getBarGraphOptions(type){
		var optionsBarGraph = {
			maintainAspectRatio: true,
			scales: {
		    xAxes: [{
		                gridLines: {
		                    display:false
		                }
		            }],
		    yAxes: [{
		                gridLines: {
		                    display:false
		                }   
		            }]
		    }
		}
		switch(type){
			case "BackupVM":
				optionsBarGraph["onClick"] = this.handleBackupVMChartClick;
				break;
			case "BackupVMDK":
				optionsBarGraph["onClick"] = this.handleBackupVMDKChartClick;
			case "RestoreVM":
				optionsBarGraph["onClick"] = this.handleRestoreVMChartClick;
			case "RestoreVMDK":
				optionsBarGraph["onClick"] = this.handleRestoreVMDKChartClick; 
			default:
				break;
				
		}
		
		return optionsBarGraph;
	}
	
	

	render() {
		var stylesBarCharts = {
			width: '50%',
			height: '30%',
			float: 'right'
		};
		var stylesLineCharts = {
			width: '90%',
			height: '10%',
			margin: '0 auto',
			bottom: '20px'
		};
		

		//Options Line Graph
		var optionsLineGraph = {
			maintainAspectRatio: true,
			showLines: true
		}

		return (
			<div className = "barCharts">
				<div style = {stylesLineCharts}>
				<Line
						data={this.state.performanceChartData }
						options={optionsLineGraph}
					/>
				</div>
				<div style = {stylesBarCharts}>
				<Bar
						data={this.state.backupVmChartData }
						options={this.getBarGraphOptions("BackupVM")}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.restoreVmChartData }
						options={this.getBarGraphOptions("RestoreVM")}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.backupVmdkChartData }
						options={this.getBarGraphOptions("BackupVMDK")}
					/>
				</div>
				<div style = {stylesBarCharts}>
				<Bar
						data={this.state.restoreVmdkChartData }
						options={this.getBarGraphOptions("RestoreVMDK")}
					/>
				</div>
			</div>
			)
	}
}

export default withRouter(Chart);