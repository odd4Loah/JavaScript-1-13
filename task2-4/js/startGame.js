/**
 * Created by odd-hoo on 2017/12/07.
 */


var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
// var newPlayBoy=[];
// var playNum = window.sessionStorage.getItem('playBar');
console.log(playBoy);
// console.log(playNum);

function killerAction() {
    window.location.href = '../html/killerSkill.html';
}


function backToSetPage() {
    window.location.href = '../html/setPlayer.html';
}
