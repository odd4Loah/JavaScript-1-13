/**
 * Created by odd-hoo on 2017/12/04.
 */
function backToSetPage() {
    window.location.href = '../html/setPlayer.html';
}

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var playNum = window.sessionStorage.getItem('playBar');
console.log(playBoy);
console.log(playNum);

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

var day = 1;
function playGame() {
    window.location.href = '../html/startGame.html';
    sessionStorage.setItem('dayTime',JSON.stringify(day));
}

var allPlayers = [];
//定义一个空数组，数组中每一项都是对象，对象里放置所有玩家的号码，角色，生死的键值对
//{"num" : 1, "playBoy" : "杀手", "state" : 1};
for (var a = 0; a < playNum; a++) {
    allPlayers[a] = {};
    allPlayers[a].number = a + 1;
    allPlayers[a].id = playBoy[a];
    allPlayers[a].state = 1;
}
sessionStorage.setItem('allPlayers',JSON.stringify(allPlayers));
var deadNums = [];//多个
sessionStorage.setItem('deadNums',JSON.stringify(deadNums));
var deadNum = [];//单个
sessionStorage.setItem('deadNum',JSON.stringify(deadNum));
console.log(allPlayers);