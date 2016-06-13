import React from 'react';
import { Bar } from 'react-chartjs2';

// add { Line } to ReactChart ??

const Chart = (props) => {
	console.log(props.chart);
	return (
		<Bar ref='canvas' data={props.chart} width="600" height="250" />
	)

}

export default Chart;

