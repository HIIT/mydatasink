//Flot Multiple Axes Line Chart
function refresh_multi_data(data) {

    var dataSeries = [];
    var category = data.name;
    data = data.data;

    for (var i in data) {
        var newdata = data[i].sample;
        var units = data[i].units;
        var label = data[i].label;

        var line_data = [];
        for (var j in newdata) {
            line_data.push([newdata[j].timestamp * 1000, newdata[j].value]);
        }
        var serie = {
            data: line_data,
            label: data[i].label
        };
        dataSeries.push(serie);
    }

    function euroFormatter(v, axis) {
        return v.toFixed(axis.tickDecimals);
    }

    function doPlot(position) {
        $.plot($("#flot-line-chart-multi"),
            dataSeries, {
                xaxes: [{
                    mode: 'time'
                }],
                yaxes: [{
                    min: 0
                }, {
                    // align if we are to the right
                    alignTicksWithAxis: position == "right" ? 1 : null,
                    position: position,
                    tickFormatter: euroFormatter
                }],
                legend: {
                    position: 'sw'
                },
                colors: ["#1ab994"],
                grid: {
                    color: "#999999",
                    hoverable: true,
                    clickable: true,
                    tickColor: "#D4D4D4",
                    borderWidth: 0,
                    hoverable: true //IMPORTANT! this is needed for tooltip to work,

                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s for %x was %y",
                    xDateFormat: "%y-%0m-%0d",

                    onHover: function (flotItem, $tooltipEl) {
                        // console.log(flotItem, $tooltipEl);
                    }
                }

            });
    }

    doPlot("right");

    $("button").click(function () {
        doPlot($(this).text());
    });
}

