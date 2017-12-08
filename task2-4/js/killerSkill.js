/**
 * Created by odd-hoo on 2017/12/04.
 */


// function backToSetPage() {
//     window.location.href = '../html/setPlayer.html';
// }

//获取之前页面储存的数据并用到这个页面
// var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
// console.log(playBoy);
var idMan = [JSON.parse(sessionStorage.getItem('playerRoleTrans'))];
console.log(idMan);

var ider = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var myar = [];

for(var i in ider){
    obj3={state:1,identity:ider[i]};
    myar.push(obj3);
}
// alert(myar[1].identity);
console.log(myar);
// //页面初始化
window.onload=function firstBlood(callback) {
    var gameRole = '';
    for (var x in myar) {
        gameRole
            += '<div class="content-box1" onclick="pick()">'
            + '<p class="content1">'
            +  myar[x].identity
            + '</p >'
            + '<p class="number1">'
            + (++x)
            + '号'
            + '</p >'
            + '</div>'
    }
    $(".content-box").eq(0).html(gameRole);
    callback
};
// ()
//生者    为黄，死者为黑
function pick () {
    console.log($(this).index())
    // console.log('666');
    // if (myar[$(this)].state == 1) {
    //     $('.content1').eq($(this)).css('backgroundColor', '#000000');
    // } else {
    //     console.log("666");
    // }
    // console.log(222);
};
//点击角色头像改变其颜色



//每次进入黑夜加一天
var dateTime = [];
for (var i = 0, len = dateTime.length; i > len; i++ ) {

}

//






