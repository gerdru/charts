import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentWillMount() {
		// to pass down the requested data to the components
		// databaseRequest.then(response => this.setState()
	}

	render() {
//		return()// some JSX
	}
};

Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
});