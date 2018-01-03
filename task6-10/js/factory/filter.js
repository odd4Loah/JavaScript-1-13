/**
 * Created by lihoo on 2017/12/28.
 */
// 类型过滤
adminApp.filter('typeFilter', function () {
    var typeList = ["首页banner","找职位banner","找精英banner","行业大图"];
    return function (type) {
        return type = typeList[type];
    }
});
// 状态过滤
adminApp.filter('statusFilter', function () {
    var statusList = ["草稿", "在线"];
    return function (status) {
        return status = statusList[(status - 1)];
    }
});
//上线下线过滤
adminApp.filter('lineFilter', function () {
    var statusList = ["上线","下线"];
    return function (status) {
        return status = statusList[(status - 1)];
    }
});