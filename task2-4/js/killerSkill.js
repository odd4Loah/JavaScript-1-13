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

//生者为黄，死者为黑
//点击角色头像改变其颜色

$(".content1").click(function () {
    // console.log($(this));       //$(this)是一个数组，数组是不能添加颜色的
    console.log($(this)[0]);    //$(this)[0]是数组里第0个元素，是一个可以添加背景颜色的p标签
    $(".content1").css('backgroundColor', '#f5c97b');
    //每次click先将所有颜色变为黄色
    $($(this)[0]).css('backgroundColor', '#ff6c5c');
    //再将被点击的那个颜色变为红色

    // if (myarr[1].state === 0 ) {
    //     alert('55')
    // } else {
    //     alert("杀谁呢，小崽子！");
    // }
});



// if (myarr[$(this)].state === 1 ) {
//     $('.content1').click(function () {
//         console.log($(this));
//         $('.content1').eq($(this)).css('backgroundColor', '#000000');
//     });
// }


