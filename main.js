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


openRegion(event, 'china');