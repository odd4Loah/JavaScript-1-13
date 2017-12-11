/**
 * Created by odd-hoo on 2017/12/10.
 */

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var playNum = window.sessionStorage.getItem('playBar');
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));

// console.log(playBoy);
// console.log(playNum);
console.log(allPlayers);

//杀人界面和投票界面来回切换
var title = window.sessionStorage.getItem('roleTime');
if (title < 1) {
    $('.get-one-man-out').html('杀人环节');
    $('.foot-function').html('杀死他吧');
    console.log(title);
} else {
    $('.get-one-man-out').html('投票环节');
    $('.foot-function').html('投票出局');
    console.log(title);
}

//添加动态角色节点
for (i = 0; i < playNum; i++) {
    $('.content-box').append(
          '<div class="content-box1">'
        + '<p class="content1">'
        +  playBoy[i]
        + '</p >'
        + '<p class="number1">'
        + (i + 1)
        + '号'
        + '</p >'
        + '</div>'
    );
    var allPeople = $('.content1');
    console.log(allPeople);
    if (allPlayers[i].state === 0) {
        $(allPeople[i].css('backgroundColor','#ff6c5c'));
    }
}

//
var lastSelect;
for (var j = 0; j < playNum; j++) {
    allPeople[j].index = j;
    allPeople[j].onclick = function () {
        var deadNums = [];  //每次点击都清空一次=下数组，让数组中只存放最后点击的玩家
        deadNums.push(allPlayers[this.index].number);
        console.log(deadNums);
        //获取最后点击的玩家号码，即杀死或者投死的玩家，放到死亡玩家的数组中
        sessionStorage.setItem('deadNums',JSON.stringify(deadNums));
        if (allPlayers[this.index].id === '杀手' || allPlayers[this.index].state === 0) {
            if (allPlayers[this.index].state === 0) {
                alert('请不要鞭尸，谢谢');
            } else {
                alert('杀谁呢，小崽子！');
            }
        } else {
            //lastSelect是上次点击的玩家的数组下标；
            // 如果lastSelect !== undefined成立，说明之前点击了别的玩家，则将之前点击的玩家状态还原；
            if (lastSelect !== undefined) {
                $(allPeople[lastSelect]).css('backgroundColor','#f5c97b');
                allPlayers[lastSelect].state = 1;
            }
            $(allPeople[this.index]).css('backgroundColor','#ff6c5c');  //将当前点击的玩家的背景色更改
            allPlayers[this.index].state = 0;                           //将当前点击的玩家的状态更改
            console.log(allPlayers[this.index].state);
            lastSelect = this.index;                                    //获取当前点击的玩家的数组下标
            //这三项是用来判断：如果玩家改变杀死的人时，就将之前选择的玩家的背景色还原，状态还原
        }
    }
}
//allPlayers是玩家所有属性的键值对
//allPeople是获取杀手和平民所在的类的dom节点