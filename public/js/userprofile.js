var dps = []
var userid = localStorage.getItem("userId")
console.log(userid)
$.get('/api/times/'+ userid, function(data) {
	console.log(data)
//	console.log(moment(data[21].end_time, 'HH:mm:ss').diff(moment(data[21].start_time, 'HH:mm:ss'), 'seconds'))
//	console.log(data[12].start_time)
//	console.log(moment.duration(data[12].end_time.diff(data[12].start_time)).format("m[m] s[s]"))
	for(var i = 0; i < data.length; i++) {
		dps.push({'x': new Date(data[i].createdAt), 'y': data[i].distance})
		$('#course').append("<div class='height'>"+ data[i].route_id +"</div>")
		$('#distance').append("<div class='height'>"+ data[i].distance+" mi</div>")
		$('#time').append("<div class='height'>"+ Math.round((moment(data[i].end_time, 'HH:mm:ss').diff(moment(data[i].start_time, 'HH:mm:ss'), 'minutes', 'seconds') +0.00001) * 100) / 100 +" min</div>")
		$('#date').append("<div class='height'>"+data[i].date+ "</div>")
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

