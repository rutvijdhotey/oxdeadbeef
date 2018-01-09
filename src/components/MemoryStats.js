import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';
import Img from 'react-image'
import heapUsage from '../images/HeapUsage.png'
import cpuUsage from '../images/CPUUsage.png'
import classUsage from '../images/ClassUsage.png'
import threadUsage from '../images/ThreadUsage.png'

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
			showLines: true,
			responsive: true
		}

		var headerStyles = {
			textAlign: 'center'
		}

		return (
			<div className = "memoryCharts">
				<div>
					<h3 style = {headerStyles}> Heap Usage </h3>
					<img style = {stylesLineCharts} src={heapUsage} alt="heapUsage" />
				</div>
				<div>
					<h3 style = {headerStyles}> CPU Usage </h3>
					<img style = {stylesLineCharts} src={cpuUsage} alt="cpuUsage" />
				</div>
				<div>
					<h3 style = {headerStyles}> Thread Usage </h3>
					<img style = {stylesLineCharts} src={threadUsage} alt="threadUsage" />
				</div>
				<div>
					<h3 style = {headerStyles}> Class Usage </h3>
					<img style = {stylesLineCharts} src={classUsage} alt="classUsage" />
				</div>
			</div>
			)
	}
}



export default MemoryStats;