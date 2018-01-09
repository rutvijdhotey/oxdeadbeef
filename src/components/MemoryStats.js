import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class MemoryStats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//Enter the memory performance stats
			resourceUtilization: props.resourceUtilization
		}
	}
	
	render() {

		var stylesLineCharts = {
			width: '90%',
			margin: '0 auto',
			bottom: '20px'
		};

		//Options Line Graph
		var optionsLineGraph = {
			maintainAspectRatio: false,
			showLines: true
		}

		return (
			<div className = "memoryCharts">
				<div style = {stylesLineCharts}>
				<Line
						data={this.state.resourceUtilization }
						options={optionsLineGraph}
					/>
				</div>
				<div style = {stylesLineCharts}>
				<Line
						data={this.state.resourceUtilization }
						options={optionsLineGraph}
					/>
				</div>
				<div style = {stylesLineCharts}>
				<Line
						data={this.state.resourceUtilization }
						options={optionsLineGraph}
					/>
				</div>
			</div>
			)
	}
}



export default MemoryStats;