import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import { withRouter } from 'react-router-dom';

class Inflight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inflightInformation: props.inflightInformation
			//Enter the State of the Inflight Operations
		}
	}
	
	render() {
		return (
			<div className = "inflightInformation">
				<h3>
					InFlight Operations
				</h3>
				
				<div>
					VmWare facing API Calls: {this.state.inflightInformation.vmwareAPICalls}.
				</div>
				
				<div>
					Ontap facing ZAPI Calls: {this.state.inflightInformation.ontapZAPICalls}
				</div>
				
				<div>
					Snapcenter Server API Calls: {this.state.inflightInformation.scServerAPICalls}
				</div>
				
				<div>
					SCV Gui API Calls: {this.state.inflightInformation.scvGuiAPICalls}
				</div>

				<div>
					SCV Server Calls: {this.state.inflightInformation.scvServerCalls}
				</div>
				
			</div>
			)
	}
}



export default withRouter(Inflight);