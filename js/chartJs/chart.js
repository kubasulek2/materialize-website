window.onload = function () {
	/* Visitors Chart */
	const chart = new CanvasJS.Chart('chartContainer', {
		animationEnabled: true,
		theme: 'light2',
		title: {
			text: 'Total Traffic',
			fontColor: '#5998ff',
			fontFamily: 'Open Sans'
		},
		axisX: {
			valueFormatString: 'MMM YY',
			titleFontColor: '#5998ff',
			lineColor: '#5998ff',
			labelFontColor: '#5998ff',
			tickColor: '#5998ff',
			fontFamily: 'Open Sans',
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			}
		},
		axisY: {
			title: 'Number of Visits',
			titleFontColor: '#5998ff',
			lineColor: '#5998ff',
			labelFontColor: '#5998ff',
			tickColor: '#5998ff',
			fontFamily: 'Open Sans',
			crosshair: {
				enabled: true
			}
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: 'pointer',
			verticalAlign: 'bottom',
			horizontalAlign: 'left',
			dockInsidePlotArea: true,
			itemclick: toogleDataSeries
		},
		data: [ {
			type: 'line',
			showInLegend: true,
			name: 'Total Visit',
			markerType: 'square',
			xValueFormatString: 'DD MMM, YYYY',
			color: '#82B1FF',
			dataPoints: [
				{ x: new Date(2018, 0, 1), y: 60450 },
				{ x: new Date(2018, 1, 1), y: 71100 },
				{ x: new Date(2018, 2, 1), y: 67102 },
				{ x: new Date(2018, 3, 1), y: 55800 },
				{ x: new Date(2018, 4, 1), y: 64320 },
				{ x: new Date(2018, 5, 1), y: 75000 },
				{ x: new Date(2018, 6, 1), y: 81200 },
				{ x: new Date(2018, 7, 1), y: 77800 },
				{ x: new Date(2018, 8, 1), y: 85500 },
				{ x: new Date(2018, 9, 1), y: 63943 },
				{ x: new Date(2018, 10, 1), y: 70000 },
				{ x: new Date(2018, 11, 1), y: 72200 },
				
			]
		},
		{
			type: 'line',
			showInLegend: true,
			name: 'Unique Visit',
			lineDashType: 'dash',
			color: '#EF5350',
			dataPoints: [
				{ x: new Date(2018, 0, 1), y: 33110 },
				{ x: new Date(2018, 1, 1), y: 44600 },
				{ x: new Date(2018, 2, 1), y: 47670 },
				{ x: new Date(2018, 3, 1), y: 35890 },
				{ x: new Date(2018, 4, 1), y: 30400 },
				{ x: new Date(2018, 5, 1), y: 32700 },
				{ x: new Date(2018, 6, 1), y: 50200 },
				{ x: new Date(2018, 7, 1), y: 48650 },
				{ x: new Date(2018, 8, 1), y: 50930 },
				{ x: new Date(2018, 9, 1), y: 42400 },
				{ x: new Date(2018, 10, 1), y: 33110 },
				{ x: new Date(2018, 11, 1), y: 33110 },
			]
		} ]

	});

	/* Top Chart */

	var chartTop = new CanvasJS.Chart('chartContainerTop', {
		animationEnabled: true,
		title: {
			text: 'Popular Projects',
			fontColor: '#5998ff',
			fontFamily: 'Open Sans'
		},
		axisY: {
			title: 'Monthly Visitors',
			titleFontColor: '#5998ff',
			lineColor: '#5998ff',
			labelFontColor: '#5998ff',
			tickColor: '#5998ff',
			fontFamily: 'Open Sans'
		},
		axisX: {
			title: 'Projects',
			titleFontColor: '#5998ff',
			lineColor: '#5998ff',
			labelFontColor: '#5998ff',
			tickColor: '#5998ff',
			fontFamily: 'Open Sans'
		},
		data: [ {
			type: 'column',
			name: 'Visitors',
			color: '#66BB6A', 
			yValueFormatString: '#.##',
			dataPoints: [
				{ label: 'WeatherNow', y: 32000 },
				{ label: 'Tool Box', y: 14000 },
				{ label: 'MagicFridge', y: 8600 },
			]
		} ]
	});
	



	function toogleDataSeries (e) {
	if (typeof (e.dataSeries.visible) === 'undefined' || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		chart.render();
	}
	
	
	
	setTimeout(() => {
		chart.render();
		chartTop.render();

	}, 1200);

};                                