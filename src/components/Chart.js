import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			backupChartData: props.backupChartData,
			restoreChartData: props.restoreChartData,
			mountChartData: props.mountChartData
		}
	}

	

	render() {
		var styles = {
		width: '33%',
		float: 'right'
	};
		return (
			<div className = "barCharts">
				<div style = {styles}>
				<Bar
						data={this.state.backupChartData }
						options={{maintainAspectRatio: true}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.restoreChartData }
						options={{maintainAspectRatio: true}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.mountChartData }
						options={{maintainAspectRatio: true}}
					/>
				</div>
			</div>
			)
	}
}

export default Chart;