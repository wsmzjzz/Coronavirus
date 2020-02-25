
var dom = document.getElementById("pie");
var myChart = echarts.init(dom);

myChart.setOption({
    series: [{
        name: 'Name',
        type: 'pie',
        radius: '90%',
        data: [{
            value: 235,
            name: 'A'
        }, {
            value: 274,
            name: 'B'
        }, {
            value: 310,
            name: 'C'
        }, {
            value: 335,
            name: 'D'
        }]
    }]
});

let china = document.getElementById('china');
let henan = document.getElementById('henan');
let hebei = document.getElementById('hebei');
let zhejiang = document.getElementById('zhejiang');
let shandong = document.getElementById('shandong');
let guangdong = document.getElementById('guangdong');
let regionTitle = document.getElementById('regionTitle');
// 全国
china.onclick = function() {
    regionTitle.textContent = '全国疫情数据';
myChart.setOption({
    series: [{
        name: 'Name',
        type: 'pie',
        radius: '90%',
        data: [{
            value: 235,
            name: 'A'
        }, {
            value: 274,
            name: 'B'
        }, {
            value: 310,
            name: 'C'
        }, {
            value: 335,
            name: 'D'
        }]
    }]
});


}
// 河南
henan.onclick = function() {
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
hebei.onclick = function() {
    regionTitle.textContent = '河北疫情数据';


}
// 浙江
zhejiang.onclick = function() {
    regionTitle.textContent = '浙江疫情数据';
}


// 山东
shandong.onclick = function() {
    regionTitle.textContent = '山东疫情数据';
}


// 广东
guangdong.onclick = function() {
    regionTitle.textContent = '广东疫情数据';
}

