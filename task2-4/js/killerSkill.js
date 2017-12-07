/**
 * Created by odd-hoo on 2017/12/04.
 */

//获取之前页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
console.log(playBoy);

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
};

//每次进入黑夜加一天
var dateTime = [];
for (var i = 0, len = dateTime.length; i > len; i++ ) {

}

function backToSetPage() {
    window.location.href = '../html/setPlayer.html';
}

