/**
 * Created by odd-hoo on 2017/12/04.
 */

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
// var newPlayBoy=[];
// var playNum = window.sessionStorage.getItem('playBar');
console.log(playBoy);
// console.log(playNum);
window.onload = function () {
    var gameRole = '';
    for (var x in playBoy) {
        gameRole
            += '<div class="content-box1">'
            + '<p class="content1">'
            +  playBoy[x]
            + '</p >'
            + '<p class="number1">'
            + (++x)
            + '号'
            + '</p >'
            + '</div>'
    }
    $(".content-box").eq(0).html(gameRole);
}
function backToSetPage() {
    window.location.href = '../html/setPlayer.html';
}

