/**
 * Created by odd-hoo on 2017/12/10.
 */

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var playNum = window.sessionStorage.getItem('playBar');
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));

console.log(playBoy);
console.log(playNum);
console.log(allPlayers);
