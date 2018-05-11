var dps = []

$.get('/api/times/12', function(data) {
	console.log(data)
	for(var i = 0; i < data.length; i++) {
		dps.push({'x': new Date(data[i].createdAt), 'y': data[i].distance})
	}
})

window.onload = function () {
	var chart = new CanvasJS.Chart("chart-area", {
		animationEnabled: true,
		zoomEnabled: true,
		backgroundColor: '#778899',
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
		}]
	})
chart.render()
}

// $(document).ready (function(){
// //pre-set user id b/c sign-in not available yet:
// var userid =1
// $.get("/api/users/" + userid, function(data) {
//     console.log(data)
//     //data returns user info based on id
// });
// });

