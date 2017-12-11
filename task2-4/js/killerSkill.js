/**
 * Created by odd-hoo on 2017/12/04.
 */

//获取之前页面储存的数据并用到这个页面
var ider = JSON.parse(sessionStorage.getItem('playerRoleTrans'));
var myarr = [];
for(var i in ider) {
    obj3={state:1,identity:ider[i]};
    myarr.push(obj3);
}
// alert(myar[1].identity);
console.log(myarr);
console.log(myarr[2].state);
// console.log(myarr[3].identity);
// //页面初始化

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


(function () {
    var gameRole = '';
    for (var x in myarr) {
        gameRole
            += '<div class="content-box1">'
            + '<p class="content1 ">'
            +  myarr[x].identity
            + '</p >'
            + '<p class="number1">'
            + (++x)
            + '号'
            + '</p >'
            + '</div>'
    }
    $(".content-box").html(gameRole);
}());

//生者为黄，死者为红
//点击角色头像改变其颜色
$(".content-box1").click(function () {
    // console.log($(this));       //$(this)是一个数组，数组是不能添加颜色的
    console.log($(this).index());    //$(this).index()是数组里元素索引
    $(".content-box1").children(".content1").css('backgroundColor', '#f5c97b');
    //每次click先将所有颜色变为黄色
    $(".content-box1").children(".content1").eq($(this).index()).css('backgroundColor', '#ff6c5c');
    //再将被点击的那个颜色变为红色
    stateIndex = $(this).index();
});

$('#result').on('click',function () {


    if (2 > 0) {
        myarr[stateIndex].state = 0;
        console.log(myarr[stateIndex].state);
        console.log(myarr);
        sessionStorage.setItem('myArr',JSON.stringify(myarr));
        // window.location.href = '../html/startGame.html';
        console.log("有问题");
    } else {
        alert('不杀一个你今天就别走了');
    }
});


// if (myarr[$(this)].state === 1 ) {
//     $('.content1').click(function () {
//         console.log($(this));
//         $('.content1').eq($(this)).css('backgroundColor', '#000000');
//     });
// }


