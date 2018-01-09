import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
 
class ChartDetails extends Component {

    constructor(props) {
		super(props);
		console.log(props.location.state.type);  //which chart was clicked
		//console.log(props.rgBackupChartData);
		this.state = {
			rgBackupChartData: props.rgBackupChartData
		}
		console.log(this.state.rgBackupChartData);
		
	}

  render() {
	  
	  var chartRowStyle = {
		  height: "30%",
		  marginBottom: "30%"
	  };
	  
	var stylesBarCharts = {
			width: '40%',
			paddingRight: '5%',
			float: 'right'
		};
		
	var styleText = {
		width: '10%',
		paddingTop: "15",
		marginLeft: "5%"
	}
		
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
		    }
		}
	
	var chartData = this.state.rgBackupChartData;
	const charts = Object.keys(chartData).map(function(keyName, keyIndex) {
  // use keyName to get current key's name
  // and a[keyName] to get its value
		
		console.log("KEY NAME: " + keyName);
		console.log(chartData);
		
		return(
		<div style = {chartRowStyle}>
			<h3 style = {styleText}>
				{keyName}
			</h3>
			
			<div style = {stylesBarCharts}>
				<Bar
					data={chartData[keyName]["VmData"]}
					options={optionsBarGraph}
				/>
			</div>
			<div style = {stylesBarCharts}>
				<Bar
					data={chartData[keyName]["DatastoreData"]}
					options={optionsBarGraph}
				/>
			</div>
			
			
		</div>
		);
		
	});
	
	
    return (
	<div>
		{charts}
		</div>
    );
  }
}
 
export default ChartDetails;