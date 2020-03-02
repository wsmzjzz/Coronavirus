// 左侧六个按钮打开右侧对应页面
function openRegion(evt, regionName) {
    // 右侧总共六个页面 先全部隐藏
    var rightContents = document.getElementsByClassName('right');
    for (var i = rightContents.length - 1; i >= 0; i--) {
        rightContents[i].style.display = 'none';
    }
    // 左侧六个按钮 也先全部隐藏
    var buttonNavs = document.getElementsByClassName('button-nav');
    for (var i = buttonNavs.length - 1; i >= 0; i--) {
        buttonNavs[i].className = buttonNavs[i].className.replace(" active", "");
    }
    // 将当前选择的右侧城市页面和对应的左侧按钮设为active
    var currentopenRegionTab = document.getElementById(regionName);
    currentopenRegionTab.style.display = "block";
    evt.currentTarget.className += ' active';
}

var dom = document.getElementById("chart1");
var myChart = echarts.init(dom);

myChart.setOption({
    dataset: {
        source: [
            ["provinceEnglishName","province_confirmedCount","province_suspectedCount","province_curedCount","province_deadCount","updateTime"],
            ["Hubei","549","0","31","24","1-24"],
            ["Hubei","730","0","32","39","1-25"],
            ["Hubei","1058","0","42","52","1-26"],
            ["Hubei","1423","0","47","76","1-27"],
            ["Hubei","2714","0","52","100","1-28"],
            ["Hubei","3554","0","87","125","1-29"],
            ["Hubei","4903","0","90","162","1-30"],
            ["Hubei","5806","0","141","204","1-31"],
            ["Hubei","7153","0","168","249","2-01"],
            ["Hubei","9074","0","267","294","2-02"],
            ["Hubei","11177","0","300","350","2-03"],
            ["Hubei","13522","0","397","414","2-04"],
            ["Hubei","16678","0","536","479","2-05"],
            ["Hubei","19665","0","712","549","2-06"],
            ["Hubei","22112","0","867","618","2-07"],
            ["Hubei","24953","0","1218","699","2-08"],
            ["Hubei","27100","23638","1480","780","2-09"],
            ["Hubei","29631","0","1854","871","2-10"],
            ["Hubei","31728","0","2310","974","2-11"],
            ["Hubei","33366","0","2686","1068","2-12"],
            ["Hubei","48206","0","3459","1310","2-13"],
            ["Hubei","51986","0","3900","1318","2-14"],
            ["Hubei","54406","0","4821","1457","2-15"],
            ["Hubei","56249","0","5666","1596","2-16"],
            ["Hubei","58182","0","6693","1696","2-17"],
            ["Hubei","59989","0","7943","1789","2-18"],
            ["Hubei","61682","0","9336","1921","2-19"],
            ["Hubei","62031","0","10521","2029","2-20"],
            ["Hubei","62662","0","11881","2144","2-21"],
            ["Hubei","63454","0","13690","2250","2-22"],
            ["Hubei","64084","0","15343","2346","2-23"],
            ["Hubei","64287","0","16748","2495","2-24"],
            ["Hubei","64786","0","18971","2563","2-25"],
            ["Hubei","65187","0","20969","2615","2-26"],
            ["Hubei","65596","0","23383","2641","2-27"],
            ["Hubei","65914","0","26403","2682","2-28"],
            ["Hubei","66337","0","28993","2727","2-29"],
            ["Hubei","66907","0","31536","2761","3-01"],
            ["Hubei","67103","0","33757","2803","3-02"],

        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [{
        type: 'line',
        smooth: true,
        encode: {
            x: 'updateTime',
            y: 'province_confirmedCount',
        }
    }]

});

let china = document.getElementById('china');
let henan = document.getElementById('henan');
let hubei = document.getElementById('hubei');
let zhejiang = document.getElementById('zhejiang');
let shandong = document.getElementById('shandong');
let guangdong = document.getElementById('guangdong');
let regionTitle = document.getElementById('regionTitle');
