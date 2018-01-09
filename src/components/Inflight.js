import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class Inflight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			//Enter the State of the Inflight Operations
		}
	}
	
	render() {
		return (
			<div className = "inflightInformation">
				Hello Ashkon :)
			</div>
			)
	}
}



export default withRouter(Inflight);