/**
 * Created by odd-hoo on 2017/12/19.
 */
$(function () {
    $('.log-out').click(function () {
        if (confirm('是否关闭初号机？')) {
            window.location.href = '../index.html';
        }
    });
});
// angular.module("myApp", ["ui.router"]); // myApp为自定义模块，依赖第三方路由模块ui.router
