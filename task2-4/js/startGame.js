/**
 * Created by odd-hoo on 2017/12/07.
 */

//获取之前页面储存的玩家号码，角色，并用到这个页面
var playNum = window.sessionStorage.getItem('playBar');
var day = JSON.parse(sessionStorage.getItem('dayTime'));
var firstBlood = JSON.parse(sessionStorage.getItem('firstBlood'));
var deadNums = JSON.parse(sessionStorage.getItem('deadNums'));
var deadNum = JSON.parse(sessionStorage.getItem('deadNum'));
// var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
// console.log(playBoy);

console.log(playNum);
console.log(day);
console.log(firstBlood);
console.log(deadNums);
// console.log(deadNum);

if (deadNums === null) {
    console.log('Grrrrr');
} else {
    deadNum.push(deadNums[deadNums.length - 1]);
}
//最简单的数组去重方法
function unique1(array) {
    var n = []; //这是一个新的临时数组
    //遍历当前数组
    for (var i = 0, len = array.length; i < len; i++) {
        //如果当前数组的第i项已经保存进了临时数组，那么就跳过执行
        //否则把当前项push到临时数组里
        if (n.indexOf(array[i]) === -1)n.push(array[i]);
    }
    return n;
}
unique1(deadNum);
// sessionStorage.setItem('n',JSON.stringify(n));
// sessionStorage.setItem("deadNum",JSON.stringify(deadNum));
console.log(deadNum);
$('.day-by-day').html('第' + day + '天');
console.log(day);
//点击后请亡灵发言
function Click2() {
    if ($('#killerAction').css('backgroundColor') === 'rgb(41, 189, 224)') {
        alert('一步一步来啊小胸弟');
    } else {
        $('#deadSpeak').css({
            'backgroundColor' : '#eaeaea',
            'pointerEvents' : 'none',   //元素永远不会成为鼠标事件的目标
            'cursor' : 'notAllowed'     //一个红色的圈加一个斜杠,不可点击
        });
        alert('遗言家请发言');
    }
}
//点击后请剩余玩家发言
function Click3() {
    if ($('#deadSpeak').css('backgroundColor') === 'rgb(41, 189, 224)') {
        alert('一步一步来啊小胸弟');
    } else {
        $('#aliveSpeak').css({
            'backgroundColor' : '#eaeaea',
            'pointerEvents' : 'none',   //元素永远不会成为鼠标事件的目标
            'cursor' : 'notAllowed'     //一个红色的圈加一个斜杠,不可点击
        });
        alert('活着的都说句话');
    }
}

// if (firstBlood === 'rgb(41, 189, 224)') {
//     $('#killerAction').css({
//         'backgroundColor' : '#eaeaea',
//         'pointerEvents' : 'none',   //元素永远不会成为鼠标事件的目标
//         'cursor' : 'notAllowed'     //一个红色的圈加一个斜杠,不可点击
//     });
// }


//点击后进入杀手杀人界面
function Click1() {
    var role = 0;
    var firstBlood = $('#killerAction').css('backgroundColor');
    window.sessionStorage.setItem('roleTime', role);
    $('#killerAction').css({
        'backgroundColor' : '#eaeaea',
        'pointerEvents' : 'none',   //元素永远不会成为鼠标事件的目标
        'cursor' : 'notAllowed'     //一个红色的圈加一个斜杠,不可点击
    });
    sessionStorage.setItem('firstBlood', JSON.stringify(firstBlood));
    window.location.href = '../html/killerSkill.html';
}

//点击后进入全民投票环节
function Click4() {
    var role = 1;
    if ($('#aliveSpeak').css('backgroundColor') === 'rgb(41, 189, 224)') {
        alert('一步一步来啊小胸弟');
    } else {
        window.location.href = '../html/killerSkill.html';
        window.sessionStorage.setItem('roleTime',role);
        $('#playerVote').css({
            'backgroundColor' : '#eaeaea',
            'pointerEvents' : 'none',   //元素永远不会成为鼠标事件的目标
            'cursor' : 'notAllowed'     //一个红色的圈加一个斜杠,不可点击
        });
    }
}


function restartGame() {
    if (confirm('确定要重玩么？')) {
        sessionStorage.removeItem
        ('day','firstBlood',
         'deadNums','deadNums',
         'role','allPlayers',
         'playerRoleTrans',
         'playBar','dayTime'
         );

        window.location.href = '../html/setPlayer.html';
    }


}