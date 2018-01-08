import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			backupChartData: props.backupChartData
		}
	}

	render() {
		return (
			<div className = "chart">
				<Bar
					data={this.state.backupChartData }
					options={{maintainAspectRatio: true}}
				/>
			</div>
			)
	}
}

export default Chart;