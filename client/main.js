import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/chart.js'

class App extends Components {
	constructor(props) {
		super(props);

		this.state = { chart: {
			type: 'line',
			data: {
				// y-axis
				labels: ["2010", "2011", "2012", "2013"],
				datasets: [{
					label: 'numbers',
					// x-axis
					data: [100, 200, 70, 280],
					backgroundColor: [
	                'rgba(255, 206, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(255, 159, 64, 0.2)'
	            	],
					borderColor: [
	                'rgba(255,99,132,1)',
	                'rgba(54, 162, 235, 1)',
	                'rgba(255, 206, 86, 1)',
	                'rgba(75, 192, 192, 1)'
	                ]
				}]
			}
		}};
	};

	render() {
		return(
			<div>
				<canvas width="400" height="400">
				<Chart chart={this.state.chart} />
				</canvas>
			</div>
		);
	}
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});