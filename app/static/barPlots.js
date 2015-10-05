$(document).ready(function() {
    $(bar_id).highcharts({
        chart: chart,
        title: title,
        xAxis: xAxis,
	plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                        //mouseOver: function () {
                            location.href = this.options.url;
                        }
                    }
                }
            }
        },
	//plotOptions: plotOptions,
        series: series,
	yAxis: yAxis
    });
});
