


$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "dashboard/departmentMovements",
        data: { 'monthvalue': $('.valueofmonth').val() },
        success: function (response) {
            var _ydata = response.month;
            var _xdata = response.monthcount;

            var ict_unit = [];
            var efficiency = [];
            var coloR = [];
            var dynamicColors = function () {
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                return "rgb(" + r + "," + g + "," + b + ")";
            };

            for (var i in _xdata) {
                ict_unit.push("ICT Unit " + _xdata[i].ict_unit);
                efficiency.push(_xdata[i].efficiency);
                coloR.push(dynamicColors());
            }

            var myData = {
                labels: _ydata,
                datasets: [{
                    label: "مخطط بياني",
                    fill: false,
                    backgroundColor: coloR,
                    borderColor: coloR,
                    data: _xdata,

                }]

            };

            // Options to display value on top of bars

            var myoption = {
                tooltips: {
                    enabled: false
                },
                hover: {
                    animationDuration: 1
                },
                animation: {
                    // duration: 3,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = "rgba(0, 0, 0, 1)";
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);


                            });
                        });
                    },


                },
                scales: {
                    xAxes: [{
                        gridLines:{
                            display:false
                        },
                        ticks: {
                            fontSize: 17,
                        },
                    }],
                    yAxes: [{
                        gridLines:{
                            display:false
                        },
                        ticks: {
                            display:false,

                        },


                    }]
                },

            };


            const ctx = document.getElementById('revenue-chart-canvas').getContext('2d');
            const myChart = new Chart(ctx, {
                type: 'bar', // Define chart type
                data: myData, // Chart data
                options: myoption // Chart Options [This is optional paramenter use to add some extra things in the chart].

            });


            $(document).on('change', '.valueofmonth', function () {
                var valueofmonth = $('#valueofmonth').val();
                data = {
                    'monthvalue': valueofmonth,
                };

                $.ajax({
                    type: "GET",
                    url: "dashboard/departmentMovements",
                    data: data,
                    success: function (response) {
                        _ydata = response.month;
                        _xdata = response.monthcount;
                        for (var i in _xdata) {
                            ict_unit.push("ICT Unit " + _xdata[i].ict_unit);
                            efficiency.push(_xdata[i].efficiency);
                            coloR.push(dynamicColors());
                        }

                        myChart.data.labels = _ydata;
                        myChart.data.datasets[0].data = _xdata;
                        myChart.update();
                    }
                });
            });


        }





    });

});

$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "dashboard/monthMovements",
        success: function (response) {

            console.log(response);

            var _ydata2 = response.montname;
            var _xdata2 = response.movements;
            var _xdata3 = response.dispatches;

            var ict_unit = [];
            var efficiency = [];
            var coloR = [];
            var dynamicColors = function () {
                var r = Math.floor(Math.random() * 255);
                var g = Math.floor(Math.random() * 255);
                var b = Math.floor(Math.random() * 255);
                return "rgb(" + r + "," + g + "," + b + ")";
            };

            for (var i in _xdata2) {
                ict_unit.push("ICT Unit " + _xdata2[i].ict_unit);
                efficiency.push(_xdata2[i].efficiency);
                coloR.push(dynamicColors());
            }
            // for (var i in _xdata3) {
            //     ict_unit.push("ICT Unit " + _xdata3[i].ict_unit);
            //     efficiency.push(_xdata3[i].efficiency);
            //     coloR.push(dynamicColors());
            // }

            var myData2 = {
                labels: _ydata2,
                datasets: [{
                    label: " حركة داخلية",
                    fill: false,
                    backgroundColor: 'rgb(0,206,209)',
                    borderColor: 'rgb(0,206,209)',
                    data: _xdata2,

                },
                {
                    label: "ايفادات ",
                    fill: false,
                    backgroundColor: '	rgba(255,140,0,1)',
                    borderColor: '	rgba(255,140,0,1)',
                    data: _xdata3,

                }]

            };

            // Options to display value on top of bars

            var myoption2 = {
                tooltips: {
                    enabled: false
                },
                hover: {
                    animationDuration: 1
                },
                animation: {
                    // duration: 3,
                    onComplete: function () {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = "rgba(0, 0, 0, 1)";
                        ctx.textBaseline = 'bottom';

                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);


                            });
                        });
                    },


                },
                scales: {
                    xAxes: [{
                        gridLines:{
                            display:false
                        },
                        ticks: {
                            fontSize: 17,
                        },
                    }],
                    yAxes: [{
                        gridLines:{
                            display:false
                        },
                        ticks: {
                            display:false,

                        },


                    }]
                },

            };


            const ctx2 = document.getElementById('revenue-chart-canvas2').getContext('2d');
            const myChart2 = new Chart(ctx2, {
                type: 'bar', // Define chart type
                data: myData2, // Chart data
                options: myoption2 // Chart Options [This is optional paramenter use to add some extra things in the chart].

            });


        }





    });

});

// const _ydata='';
// const _xdata='';


