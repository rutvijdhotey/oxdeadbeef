import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class RGStatistics extends Component {
	constructor(props) {
		
		super(props);
					console.log("ASDFASDFASDFDS: " + props.rgStatistics)
		this.state = {
			rgStatistics: props.rgStatistics
			//Enter the State of the Inflight Operations
		}
		
	}
	
	render() {

var listElementStyles = {
	paddingBottom :  '10px'
};
			var rgStats = this.state.rgStatistics;
			const rgStatsRows = Object.keys(rgStats).map(function(keyName, keyIndex) {
				let dsRows = Object.keys(rgStats[keyName]).map(function(keyName2, keyIndex2) {
					return(
						<li style = {listElementStyles}> {keyName2} : {rgStats[keyName][keyName2]}ms</li>
					);
		
				});
				return(
				<div>
				<h4>{keyName}</h4>
				<ul>{dsRows}</ul>
				</div>
				);
		
			});
		
		
		return (
			<div className = "inflightInformation">
				<h3>
					Datastore Operations
				</h3>
				
				{rgStatsRows}
				
				
			</div>
			)
	}
}



export default RGStatistics;