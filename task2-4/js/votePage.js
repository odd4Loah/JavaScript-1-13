/**
 * Created by odd-hoo on 2017/12/12.
 */

//获取上一个页面储存的数据并用到这个页面
var playBoy = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var playNum = window.sessionStorage.getItem('playBar');
var allPlayers = JSON.parse(sessionStorage.getItem("allPlayers"));
var c1 = JSON.parse(sessionStorage.getItem('c1'));
var day = JSON.parse(sessionStorage.getItem('dayTime'));

// console.log(playBoy);
// console.log(playNum);
console.log(allPlayers);
console.log(c1);
console.log(day);

//杀人界面和投票界面来回切换，用的其实是一个HTML
var title = window.sessionStorage.getItem('roleTime');
if (title < 1) {
    $('.get-one-man-out').html('杀人环节');
    $('.foot-function').html('杀死平民');
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
        $(allPeople[i]).css('backgroundColor','#ff6c5c');
    }
}

// var b = [];

//最后点击的那个玩家出局
var lastSelect;
for (var j = 0; j < playNum; j++) {
    allPeople[j].index = j;
    allPeople[j].onclick = function () {
        var deadNums = [];  //每次点击都清空一次=下数组，让数组中只存放最后点击的玩家
        deadNums.push(allPlayers[this.index].number);
        console.log(deadNums);
        //获取最后点击的玩家号码，即杀死或者投死的玩家，放到死亡玩家的数组中
        sessionStorage.setItem('deadNums',JSON.stringify(deadNums));
        if (allPlayers[this.index].state === 0) {
                alert('请不要鞭尸，谢谢');
        } else {
            //lastSelect是上次点击的玩家的数组下标；
            // 如果lastSelect !== undefined成立，说明之前点击了别的玩家，则将之前点击的玩家状态还原；
            if (lastSelect !== undefined) {
                allPlayers[lastSelect].state = 1;
                $(allPeople[lastSelect]).css('backgroundColor','#f5c97b');
            }
            $(allPeople[this.index]).css('backgroundColor','#ff6c5c');  //将当前点击的玩家的背景色更改
            allPlayers[this.index].state = 0;                           //将当前点击的玩家的状态更改
            console.log(allPlayers[this.index].state);
            lastSelect = this.index;                                    //获取当前点击的玩家的数组下标
            //这三项是用来判断：如果玩家改变杀死的人时，就将之前选择的玩家的背景色还原，状态还原
        }
    }
}
var killer = 0;
var farmer = 0;
function outSomebody() {
    sessionStorage.setItem("allPlayers",JSON.stringify(allPlayers));
    for (var n = 0; n < playNum; n++) {
        if (allPlayers[n].state === 1) {
            if (allPlayers[n].id === '杀手') {
                killer++;
                console.log(killer);
            } else {
                farmer++;
                console.log(farmer);
            }
        }
    }
    //循环判断玩家对象中，所有活着的杀手和平民的数量，再比较两者的数量，跳转到对应页面
    if (lastSelect === undefined) {
        alert('不杀人，还想溜！');
    } else {
        if (killer === 0) {
            var result = 1;
            sessionStorage.setItem('result',JSON.stringify(result));
            alert('好人获胜！');
            window.location.href = '../html/result.html';
        } else if (killer === farmer) {
            alert('杀手获胜！');
            window.location.href = '../html/result.html';
        } else {
            day++;
            sessionStorage.setItem('dayTime',JSON.stringify(day));
            window.location.href = '../html/startGame.html';
        }
        console.log(killer);
        console.log(farmer);
    }
}
//allPlayers是玩家所有属性的键值对
//allPeople是获取杀手和平民所在的类的dom节点

//之前的另一个思路（请勿删除）！

// //获取之前页面储存的数据并用到这个页面
// var ider = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
// var myarr = [];
// for(var i in ider) {
//     obj3={state:1,identity:ider[i]};
//     myarr.push(obj3);
// }
// // alert(myar[1].identity);
// console.log(myarr);
// console.log(myarr[2].state);
// // console.log(myarr[3].identity);
// // //页面初始化
//
// var title = window.sessionStorage.getItem('roleTime');
// if (title < 1) {
//     $('.get-one-man-out').html('杀人环节');
//     $('.foot-function').html('杀死他吧');
//     console.log(title);
// } else {
//     $('.get-one-man-out').html('投票环节');
//     $('.foot-function').html('投票出局');
//     console.log(title);
// }
//
//
// (function () {
//     var gameRole = '';
//     for (var x in myarr) {
//         gameRole
//             += '<div class="content-box1">'
//             + '<p class="content1 ">'
//             +  myarr[x].identity
//             + '</p >'
//             + '<p class="number1">'
//             + (++x)
//             + '号'
//             + '</p >'
//             + '</div>'
//     }
//     $(".content-box").html(gameRole);
// }());
//
// //生者为黄，死者为红
// //点击角色头像改变其颜色
// $(".content-box1").click(function () {
//     // console.log($(this));       //$(this)是一个数组，数组是不能添加颜色的
//     console.log($(this).index());    //$(this).index()是数组里元素索引
//     $(".content-box1").children(".content1").css('backgroundColor', '#f5c97b');
//     //每次click先将所有颜色变为黄色
//     $(".content-box1").children(".content1").eq($(this).index()).css('backgroundColor', '#ff6c5c');
//     //再将被点击的那个颜色变为红色
//     stateIndex = $(this).index();
// });
//
// $('#result').on('click',function () {
//
//
//     if (2 > 0) {
//         myarr[stateIndex].state = 0;
//         console.log(myarr[stateIndex].state);
//         console.log(myarr);
//         sessionStorage.setItem('myArr',JSON.stringify(myarr));
//         // window.location.href = '../html/startGame.html';
//         console.log("有问题");
//     } else {
//         alert('不杀一个你今天就别走了');
//     }
// });
//
//
// // if (myarr[$(this)].state === 1 ) {
// //     $('.content1').click(function () {
// //         console.log($(this));
// //         $('.content1').eq($(this)).css('backgroundColor', '#000000');
// //     });
// // }


