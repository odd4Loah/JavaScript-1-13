/**
 * Created by odd-hoo on 2017/12/03.
 */

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var playNum = window.sessionStorage.getItem('playBar');
console.log(playBoy);
console.log(playNum);

var step = 1;       //圆形里面的步骤号码
var nn = 1;         //footer里的几号
var a = 0;          //
//添加一个动态的序号
$('.num-x') .html(step);
//添加一个底部玩家序号
$('.num-y') .html(nn);
//设置一个默认的页面样式
$('.card-icon') .css('display', 'block');
$('.card-icon-role') .css('display', 'none');
$('#check') .css('display', 'block');
$('#send') .css('display', 'none');
$('#result') .css('display', 'none');
//点击footer触发的（条件判断）函数
function checkRole() {
    if (a < playNum - 1) {      //（4~18之间的数字）- 1
        $('.card-icon') .css('display', 'none');
        $('.card-icon-role') .css('display', 'block');
        $('#check') .css('display', 'none');
        $('#send') .css('display', 'block');
        $('#result') .css('display', 'none');

        $('.killer-farmer') .html(playBoy[a]);

        nn++;
        $('.num-z') .html(nn);
        $('.num-y') .html(step);
        step++;
        a++;

        console.log("gg");
    } else if (a = playNum) {
        $('.card-icon') .css('display', 'none');
        $('.card-icon-role') .css('display', 'block');
        $('#check') .css('display', 'none');
        $('#send') .css('display', 'none');
        $('#result') .css('display', 'block');
        $('.killer-farmer') .html(playBoy[a - 1]);

        console.log("kk");
    }
}

function sendRole() {
    $('.card-icon') .css('display', 'block');
    $('.card-icon-role') .css('display', 'none');
    $('#check') .css('display', 'block');
    $('#send') .css('display', 'none');
    $('#result') .css('display', 'none');
    $('.num-x') .html(nn);
    $('.num-y') .html(step);
}

function backToSetPage() {
    window.location.href = '../html/setPlayer.html';
}
