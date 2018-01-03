/**
 * Created by odd-hoo on 2017/12/16.
 */
//原生JavaScript写法
//JQuery改写
// $(document).ready(function () {
//     $('#sign-in').click(function () {
//         //获取input数据
//         var user = $('#result1').val();
//         var code = $('#result2').val();
//         console.log(user);
//         console.log(code);
//         var xmlhttp;
//         var params = {};        //新建一个空的对象
//         params.name=$('#result1').val();
//         params.pwd=$('#result2').val();
//         console.log(params);
//         //浏览器兼容
//         if (window.XMLHttpRequest)
//         {// code for IE7+, Firefox, Chrome, Opera, Safari
//             xmlhttp = new XMLHttpRequest();
//         } else {// code for IE6, IE5
//             xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//         }
//         xmlhttp.onreadystatechange = function() {
//             if (xmlhttp.readyState === 4 && xmlhttp.status === 200)
//             {
//                 var jsons = JSON.parse(xmlhttp.responseText);
//                 //判断input是否为空
//                 if (user === "" || code === "") {
//                     alert("请输入正确的用户名和密码！");
//                 } else if (jsons.code === 0) {      //网页响应成功
//                     window.location.href = "html/backNav.html";
//                 }
//                 else {//提示
//                     $('#alert1').html(jsons.message);
//                 }
//             }
//         };
//         xmlhttp.open("POST",'/carrots-admin-ajax/a/login',true);
//         xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//         xmlhttp.send($.param(params));
//     });
// });
// function keyLogin() {
//     if (event.keyCode === 13)  //回车键的键值为13
//         $('#sign-in').click(); //调用登录按钮的登录事件
// }

angular.module("myApp")

.controller("myCtrl", function ($scope, $http, $cookies,$state) {

    $scope.login = function () {
        $http ({
            method: 'post',
            url: '/carrots-admin-ajax/a/login',
            params: $scope.params
        }).then(function successCallback(response) {
            console.log(response);
            if (response.data.user === "" || response.data.code === "") {
                alert("请输入正确的用户名和密码！");
            } else if (response.data.code === 0) {
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 30);  //距过期还有多少分钟。将此参数设置为 0 可使缓存的页立即过期。
                $cookies.put("user", angular.toJson($scope.params),{'expires': expireDate});
                // console.log(user);
                $state.go("backNav");
                // 给ui-rotuer一个state，跳转到对应页面
            } else {
                alert(response.data.message);
            }
        }, function errorCallback(response) {
            // 请求失败执行代码
            alert("请求服务器失败，请重试！");
        });
    }
});












