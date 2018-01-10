import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Statistics.css';
 
class Statistics extends Component {

    constructor(props) {
		super(props);
		this.state = {
			scvStatistics: props.scvStatistics,
			serverStatistics: props.serverStatistics,
			ontapStatistics: props.ontapStatistics
		}
	}
	

  render() {
	
	const tableColumns = [{
    Header: 'Counter',
    accessor: 'counter', // String-based value accessors!
	minWidth: 350
  }, {
    Header: 'Number of Times',
    accessor: 'numberOfTimes',
	minWidth: 200
  }, {
    Header: 'Average',
    accessor: 'average',
	minWidth: 200
  }, {
    Header: 'Median',
    accessor: 'median',
	minWidth: 200
  }];

  
  const columnProps = {
	  minWidth: 200
  }
  
  const tableProps = {
	  showPagination: false
  }
  
  const tableStyle = {
	  height: 300,
	  marginBottom: 100,
	  overflow:"hidden",
	  textAlign: 'center',
	  border: '1px solid black',
	  width: '90%'
  }
  
	
    return (
	<div>
	  System up since 1/2/2018 5:06 PM.
	  <div>
	  SCV counters and information. All times are in milliseconds.
	</div>
	  <h3>VMware APIs invoked by SCV</h3>
	  <ReactTable
		data={this.state.scvStatistics}
		columns={tableColumns}
		showPagination={false}
		style={tableStyle}
	  />
	  
	  <h3>SnapCenter Server calls</h3>
	  <ReactTable
		data={this.state.serverStatistics}
		columns={tableColumns}
		showPagination={false}
		style={tableStyle}
	  />
	  
	  <h3>Ontap ZAPI calls</h3>
	  <ReactTable
		data={this.state.ontapStatistics}
		columns={tableColumns}
		showPagination={false}
		style={tableStyle}
	  />
	</div>
    );
  }
}
 
export default Statistics;