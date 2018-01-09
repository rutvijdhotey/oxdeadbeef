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
		
		this.handleChartClick = this.handleChartClick.bind(this);
		
	}
	
	handleChartClick(e){
		this.props.history.push('/chartDetails');
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
		
		//options Bar Graph
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
		    },
			onClick: this.handleChartClick
		}

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
						options={optionsBarGraph}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.restoreVmChartData }
						options={optionsBarGraph}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.backupVmdkChartData }
						options={optionsBarGraph}
					/>
				</div>
				<div style = {stylesBarCharts}>
				<Bar
						data={this.state.restoreVmdkChartData }
						options={optionsBarGraph}
					/>
				</div>
			</div>
			)
	}
}

export default withRouter(Chart);