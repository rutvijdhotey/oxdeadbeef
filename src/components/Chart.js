import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

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
	}

	

	render() {
		var stylesBarCharts = {
			width: '50%',
			float: 'right'
		};
		var stylesLineCharts = {
			width: '90%',
			margin: '0 auto'
		};
		return (
			<div className = "barCharts">
				<div style = {stylesLineCharts}>
				<Line
						data={this.state.performanceChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {stylesBarCharts}>
				<Bar
						data={this.state.backupVmChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.restoreVmChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {stylesBarCharts}>
					<Bar
						data={this.state.backupVmdkChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {stylesBarCharts}>
				<Bar
						data={this.state.restoreVmdkChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
			</div>
			)
	}
}

export default Chart;