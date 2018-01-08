import React, { Component } from "react";
import Chart from './components/Chart'
 
class Dashboard extends Component {

    constructor(props) {
		super(props);
		this.state = {
			backupChartData: props.backupChartData,
			restoreChartData: props.restoreChartData,
			mountChartData: props.mountChartData
		}
	}

  render() {
    return (
      <Chart backupChartData = {this.state.backupChartData} mountChartData = {this.state.mountChartData} restoreChartData = {this.state.restoreChartData}/>
    );
  }
}
 
export default Dashboard;