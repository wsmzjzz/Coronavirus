
var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);

myChart.setOption({
    xAxis: {
        data: ['1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20', '1-21', '1-22'],
    },
    yAxis: {},
    series: {
        name: 'Name',
        type: 'line',
        smooth: true,
        data: [1, 3, 8, 14, 25, 37, 48, 62, 88]
    }
});

let china = document.getElementById('china');
let henan = document.getElementById('henan');
let hebei = document.getElementById('hebei');
let zhejiang = document.getElementById('zhejiang');
let shandong = document.getElementById('shandong');
let guangdong = document.getElementById('guangdong');
let regionTitle = document.getElementById('regionTitle');
// 全国
china.onmouseover = function() {
    regionTitle.textContent = '全国疫情数据';
    myChart.setOption({
        xAxis: {
            data: ['1-14', '1-15', '1-16', '1-17', '1-18', '1-19', '1-20', '1-21', '1-22'],
        },
        yAxis: {},
        series: {
            name: 'Name',
            type: 'line',
            smooth: true,
            data: [1, 3, 8, 14, 25, 37, 48, 62, 88]
        }
    });


}
// 河南
henan.onmouseover = function() {
    regionTitle.textContent = '河南疫情数据';
myChart.setOption({
    series: [{
        name: 'Name',
        type: 'pie',
        radius: '70%',
        data: [{
            value: 125,
            name: 'A'
        }, {
            value: 274,
            name: 'B'
        }, {
            value: 70,
            name: 'C'
        }, {
            value: 335,
            name: 'D'
        }]
    }]
});


}
// 河北
hebei.onmouseover = function() {
    regionTitle.textContent = '河北疫情数据';


}
// 浙江
zhejiang.onmouseover = function() {
    regionTitle.textContent = '浙江疫情数据';
}


// 山东
shandong.onmouseover = function() {
    regionTitle.textContent = '山东疫情数据';
}


// 广东
guangdong.onmouseover = function() {
    regionTitle.textContent = '广东疫情数据';
}

