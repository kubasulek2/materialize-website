window.onload = function () {
	/* Visitors Chart */
	const chart = new CanvasJS.Chart('chartContainer', {
		animationEnabled: true,
		theme: 'light2',
		title: {
			text: 'Total Traffic'
		},
		axisX: {
			valueFormatString: 'MMM YY',
			crosshair: {
				enabled: true,
				snapToDataPoint: true
			}
		},
		axisY: {
			title: 'Number of Visits',
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

	var chartTop = new CanvasJS.Chart("chartContainerTop", {
		animationEnabled: true,
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		title: {
			text: "Popular Projects"
		},
		axisY: {
			title: "Monthly Visitors",
			includeZero: false
		},
		axisX: {
			title: "Projects"
		},
		data: [ {
			type: "column",
			yValueFormatString: "#,##0.0#\"%\"",
			dataPoints: [
				{ label: "India", y: 7.1 },
				{ label: "China", y: 6.70 },
				{ label: "Indonesia", y: 5.00 },
				{ label: "Australia", y: 2.50 },
				{ label: "Mexico", y: 2.30 },
				{ label: "UK", y: 1.80 },
				{ label: "United States", y: 1.60 },
				{ label: "Japan", y: 1.60 }

			]
		} ]
	});
	

}

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