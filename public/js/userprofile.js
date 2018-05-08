// var x
// var y
// var yAxis = []
// var xAxis = []
// var userData = []
var dps = []

$.get('/api/times/12', function(data) {
	// console.log(data)
	for(var i = 0; i < data.length; i++) {
		// console.log(data[i].createdAt + ', ' + data[i].distance)
		dps.push({'x': new Date(data[i].createdAt), 'y': data[i].distance})
		// for(key in data[i]) {
		// 	console.log(key + ': ' + data[i][key])
			// if(key === 'createdAt') {
			// 	console.log(key + ': ' + data[i][key])
			// 	xAxis = [data[i][key]]
			// 	console.log(xAxis)
			// }
			// if(key === 'distance') {
			// 	yAxis = data[i][key]
			// 	console.log(yAxis)
			// }
		// }
		// userData = Object.entries(data[i])
		// var distance = userData[4]
		// yAxis = distance[1]
		// console.log(yAxis)
		// var date = userData[5]
		// xAxis = date[1]
	}
})


window.onload = function () {

var chart = new CanvasJS.Chart("chart-area", {
	animationEnabled: true,  
	title:{
		text: "Your Activity History"
	},
	axisY: {
		title: "",
		valueFormatString: "#0",
		suffix: "mi",
		prefix: ""
	},
	axisX: {
		title: "",
    valueFormatString: "MMM YYYY",
	},
	data: [{
		type: "line",
    color: "rgba(255,0,0,.5)",
    lineThickness: 3,
		markerSize: 5,
		xValueFormatString: "DD MMM YYYY",
		yValueFormatString: "##0.##mi",
		dataPoints: 
			dps
		// [
		// 	{ x: new Date(2018, 00, 01), y: 4.5 },
		// 	{ x: new Date(2018, 00, 08), y: 3.7 },
		// 	{ x: new Date(2018, 00, 15), y: 5.6 },
		// 	{ x: new Date(2018, 00, 22), y: 2.75 },
		// 	{ x: new Date(2018, 00, 29), y: 6.3 },
		// 	{ x: new Date(2018, 01, 05), y: 3.1 },
		// 	{ x: new Date(2018, 01, 12), y: 5.0 },
    //   { x: new Date(2018, 01, 19), y: 2.0 },
    //   { x: new Date(2018, 01, 26), y: 2.75 },
    //   { x: new Date(2018, 02, 05), y: 3.25 },
    //   { x: new Date(2018, 02, 12), y: 4.0 },
    //   { x: new Date(2018, 02, 19), y: 4.5 },
    //   { x: new Date(2018, 02, 26), y: 5.0 },
    //   { x: new Date(2018, 03, 02), y: 6.0 },
    //   { x: new Date(2018, 03, 09), y: 5.75 },
    //   { x: new Date(2018, 03, 16), y: 5.5 },
    //   { x: new Date(2018, 03, 23), y: 5.0 },
    //   { x: new Date(2018, 03, 30), y: 5.75 },
    //   { x: new Date(2018, 04, 06), y: 6.5 },
    //   { x: new Date(2018, 04, 13), y: 6.0 },
    //   { x: new Date(2018, 04, 20), y: 6.5 },
    //   { x: new Date(2018, 04, 27), y: 6.2 }
		// ]
	}]
	});
chart.render();

}