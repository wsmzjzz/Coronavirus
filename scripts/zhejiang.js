"use strict";

fetch('./data/zhejiang.json')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (zhejiangData) {
        // console.log(zhejiangData);

        var zhejiang1 = echarts.init(document.getElementById('zhejiang1'));
        zhejiang1.setOption({
            title: {
                text: '累计数字',
                top: 20,
            },
            dataset: {
                source: zhejiangData,
            },
            // title: '湖北',
            legend: {
                bottom: 15,
            },
            tooltip: {
                trigger: 'axis',
                position: {top: 55, left: 50}
                // axisPointer: {type: 'cross'},
                // showContent: false
            },
            xAxis: {
                // name: '日期',
                type: 'category',
                // axisTick: {
                //     alignWithLabel: true
                // },
                // data: zhejiangData.map(function (item) {return item[5];}),
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            series: [{
                name: '累计确诊',
                type: 'line',
                smooth: true,
                encode: {
                    x: 4,
                    y: 1,
                }
            }, {
                name: '现存确诊',
                type: 'line',
                smooth: true,
                color: 'orange',
                encode: {
                    x: 4,
                    y: 5,
                }
            }, {
                name: '累计治愈',
                type: 'line',
                smooth: true,
                color: 'green',
                encode: {
                    x: 4,
                    y: 2,
                }
            }, {
                name: '累计死亡',
                type: 'line',
                smooth: true,
                color: 'black',
                encode: {
                    x: 4,
                    y: 3,
                }
            }, {
                type: 'pie',
                // id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                // label: {
                //     formatter: '{b}: {@2012} ({d}%)'
                // },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }]

        });

        var zhejiang2 = echarts.init(document.getElementById('zhejiang2'));
        zhejiang2.setOption({
            title: {
                text: '新增数字',
                top: 20,
            },
            dataset: {
                source: zhejiangData,
            },
            // title: '湖北',
            legend: {
                bottom: 15,
            },
            tooltip: {
                trigger: 'axis',
                position: {top: 55, left: 50}
                // axisPointer: {type: 'cross'},
                // showContent: false
            },
            xAxis: {
                // name: '日期',
                type: 'category',
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            series: [{
                name: '新增确诊',
                type: 'line',
                smooth: true,
                color: 'orange',
                encode: {
                    x: 4,
                    y: 6,
                }
            }, {
                name: '新增治愈',
                type: 'line',
                smooth: true,
                color: 'green',
                encode: {
                    x: 4,
                    y: 7,
                }

            }, {
                name: '新增死亡',
                type: 'line',
                smooth: true,
                color: 'black',
                encode: {
                    x: 4,
                    y: 8,
                }

            }]

        });

        var zhejiang3 = echarts.init(document.getElementById('zhejiang3'));
        zhejiang3.setOption({
            title: {
                text: '治愈/死亡率',
                top: 20,
            },
            dataset: {
                source: zhejiangData,
            },
            // title: '湖北',
            legend: {
                bottom: 15,
            },
            tooltip: {
                trigger: 'axis',
                position: {top: 55, left: 50}
                // axisPointer: {type: 'cross'},
                // showContent: false
            },
            xAxis: {
                // name: '日期',
                type: 'category',
            },
            yAxis: {
                scale: true,
                splitArea: {
                    show: true
                },
                // max: '0.55'
            },
            series: [{
                name: '治愈率',
                type: 'line',
                smooth: true,
                color: 'green',
                encode: {
                    x: 4,
                    y: 9,
                }
            }, {
                name: '死亡率',
                type: 'line',
                smooth: true,
                color: 'black',
                encode: {
                    x: 4,
                    y: 10,
                }

            }]

        });
    });

