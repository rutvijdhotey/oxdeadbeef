import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2'
import { withRouter } from 'react-router-dom'

class Chart extends Component{
	constructor(props) {
		super(props);
		this.state = {
			backupChartData: props.backupChartData,
			restoreChartData: props.restoreChartData,
			mountChartData: props.mountChartData
		}
		
		this.handleChartClick = this.handleChartClick.bind(this);
		
	}
	
	handleChartClick(e){
		this.props.history.push('/chartDetails');
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
						ref="backupChart"
						data={this.state.backupChartData }
						options={{maintainAspectRatio: false, onClick: this.handleChartClick}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.restoreChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.mountChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {styles}>
				<Bar
						data={this.state.backupChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.restoreChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
				<div style = {styles}>
					<Bar
						data={this.state.mountChartData }
						options={{maintainAspectRatio: false}}
					/>
				</div>
			</div>
			)
	}
}

export default withRouter(Chart);