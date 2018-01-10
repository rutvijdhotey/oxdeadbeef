import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

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
			legend: {
				display: false
			},
			maintainAspectRatio: true,
			scales: {
		    xAxes: [{
		    	scaleLabel: {
			        display: true,
			        labelString: 'Names'
      				},
		            gridLines: {
		                    display:false,
		                    color: 'white'
		                }
		            }],
		    yAxes: [{
		    	scaleLabel: {
			        display: true,
			        labelString: 'time (ms)'
      				},
		            gridLines: {
		                display:false,
		                color: 'white'
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
			default:
				break;
				
		}
		
		return optionsBarGraph;
	}
	
	

	render() {
		var stylesBarCharts = {
			width: '45%',
			height: '30%',
			paddingRight: '5%',
			float: 'right'
		};
		var stylesLineCharts = {
			width: '90%',
			height: '10%',
			margin: '0 auto',
			bottom: '20px'
		};
		
		var headerStyles = {
			textAlign: 'center',
			color: 'white'
		}
		//Options Line Graph
		var optionsLineGraph = {
			maintainAspectRatio: true,
			showLines: true,
			scales: {
    xAxes: [{
      gridLines: {
        display: true,
        color: "white"
      },
      scaleLabel: {
        display: true,
        labelString: "Names",
        fontColor: "white"
      }
    }],
    yAxes: [{
      gridLines: {
        color: "white",
        borderDash: [2, 5],
      },
      scaleLabel: {
        display: true,
        labelString: "Time (ms)",
        fontColor: "white"
      }
    }]
  }
		}

		return (
			<div className = "barCharts">
				<div style = {stylesLineCharts}>
				<h3 style = {headerStyles}> Time Series Chart</h3>
				<Line
						data={this.state.performanceChartData }
						options={optionsLineGraph}
					/>
				</div>
				
				<div style = {stylesBarCharts}>
					<h3 style = {headerStyles}> Top 5 Vm Restores vs Time</h3>
					<Bar
						data={this.state.restoreVmChartData }
						options={this.getBarGraphOptions("RestoreVM")}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<h3 style = {headerStyles}> Top 5 Vm Backups vs Time </h3>
					<Bar
						data={this.state.backupVmChartData }
						options={this.getBarGraphOptions("BackupVM")}
					/>
				</div>
				
				<div style = {stylesBarCharts}>
					<h3 style = {headerStyles}> Top 5 Vmdk Restores vs Time </h3>
					<Bar
						data={this.state.restoreVmdkChartData }
						options={this.getBarGraphOptions("RestoreVMDK")}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<h3 style = {headerStyles}> Top 5 Vmdk Backups vs Time </h3>
					<Bar
						data={this.state.backupVmdkChartData }
						options={this.getBarGraphOptions("BackupVMDK")}
					/>
				</div>
			</div>
			)
	}
}

export default withRouter(Chart);