/**
 * Created by lihoo on 2017/12/30.
 */
angular.module("myApp")
.controller("newDataCtrl", function ($scope, $http, $state, $stateParams, type, industry) {
    //引入wangEditor
    // noinspection JSPotentiallyInvalidConstructorUsage
    var editor = new wangEditor('#editor');
    editor.create();

    //将注入constant中的type和industry赋值到该控制器中
    $scope.type = type;
    $scope.industry = industry;
    $scope.addParams = {};
    $scope.test = function () {
        $scope.$apply(function () {
            $scope.progress = 0;
            $scope.hidden = true;
            $scope.show = false;
            //更改上传的图片的时候，先将原来的图片预览清空，上传成功后再显示新上传的图片
            var imgSrc = document.getElementById('src');
            imgSrc.src = "";
            $scope.src = "";
            $scope.file = document.getElementById('file1').files;
            console.log(typeof ($scope.file));
            console.log($scope.file);
            console.log($scope.file[0]);
        });
    };
    var xhr;
    //上传图片
    $scope.uploadFile = function () {
        //创建FormData()对象
        var fd = new FormData();
        //文件对象file
        fd.append("file",$scope.file[0]);
        //使用ajax上传
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var jsons = JSON.parse(xhr.responseText);
                console.log(jsons);
                if (jsons.code === 0) {
                    $scope.$apply(function () {
                        $scope.src = jsons.data.url;
                        if ($scope.src) {
                            $scope.show = true;
                            $scope.hidden = false;
                        }
                    });
                    console.log($scope.src);
                } else {
                    bootbox.alert(jsons.message);
                }
            }
        };

        //上传图片的限制与要求
        xhr.upload.addEventListener("progress",
            function (evt) {
                if (evt.total >= 2000000) {
                    bootbox.alert("请上传小于2MB的图片！");
                } else {
                    $scope.progress = Math.round((evt.loaded) * 100 / evt.total);
                }
                //ev.loaded：文件上传的大小
                // ev.total：文件总的大小
                console.log(evt.loaded);
                //显示进度条
                console.log($scope.progress);
            }, false);
        //进度条
        xhr.open("post", "/carrots-admin-ajax/a/u/img/task",true);
        xhr.send(fd);
    };
    //删除图片
    $scope.removeFile = function () {
        //由于ng-src会生成一个src路径，所以删除时候需要将ng-src和src都清空！
        var imgSrc = document.getElementById("src");
        imgSrc.src = "";        //src
        $scope.src = "";        //ng-src
        $scope.file = "";       //文件本身
        $scope.progress = 0;    //进度条
        $scope.show = false;
        $scope.hidden = false;
    };
    //添加说明
    $scope.upload = function (x) {
        $scope.addParams.status = x;
        $scope.addParams.img = $scope.src;
        //将富文本编辑器中的内容获取出来，直接是带html的标签的，然后发给服务器；
        $scope.addParams.content = editor.txt.html();

        if ($stateParams.id === undefined) {
            $http({
                method: "post",
                url: "/carrots-admin-ajax/a/u/article",
                params: $scope.addParams
            }).then(
                function successCallback(response) {
                    bootbox.alert("新增成功！");
                    $state.go("backNav.articleList3", {reload: true});
                },function errorCallback(response) {
                    bootbox.alert("服务器请求失败，请重试（新增）！");
                }
            );
        } else {
            id = $stateParams.id;
            $http({
                method: "put",
                url: "/carrots-admin-ajax/a/u/article/" + id,
                params: $scope.addParams
            }).then(
                function successCallback(response) {
                    bootbox.alert("编辑成功！");
                    $state.go("backNav.articleList3", {reload: true});
                },function errorCallback(response) {
                    bootbox.alert("服务器请求失败，请重试（编辑）！");
                }
            );
        }
    };
    //判断id，显示“编辑”或者“新增”
    $scope.id = $stateParams.id;
    if ($stateParams.id) {
        id = $stateParams.id;
        $http({
            method: 'get',
            url: '/carrots-admin-ajax/a/article/' + id
        }).then(function successCallback(response) {
            $scope.addParams = response.data.data.article;
            $scope.src = $scope.addParams.img;
            //将服务器回复的content显示在富文本编辑器中，html标签会自己转化
            editor.txt.html($scope.addParams.content);
            console.log($scope.addParams);
            console.log($scope.addParams.content);
        },function errorCallback(response) {
            bootbox.alert("服务器请求失败，重试（编辑&新增）！");
        });
    }
    // 取消编辑&上传
    $scope.cancel = function () {
        bootbox.confirm("您还未保存，确定退出？",
            function (result) {
                if (result) {
                    $state.go("backNav.articleList3",{reload : true})
                }
            })
    };
});


