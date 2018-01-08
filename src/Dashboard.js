import React, { Component } from "react";
import Chart from './components/Chart'
 
class Dashboard extends Component {

    constructor(props) {
		super(props);
		this.state = {
			backupVmdkChartData: props.backupVmdkChartData,
			backupVmChartData: props.backupVmChartData,
			restoreVmdkChartData: props.restoreVmdkChartData,
			restoreVmChartData: props.restoreVmChartData,
			performanceChartData: props.performanceChartData
		}
	}

  render() {
    return (
      <Chart performanceChartData = {this.state.performanceChartData} backupVmdkChartData = {this.state.backupVmdkChartData} backupVmChartData = {this.state.backupVmChartData} restoreVmdkChartData = {this.state.restoreVmdkChartData} restoreVmChartData = {this.state.restoreVmChartData}/>
    );
  }
}
 
export default Dashboard;