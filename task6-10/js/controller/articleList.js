/**
 * Created by lihoo on 2017/12/26.
 */
adminApp.controller("articleCtrl",function ($scope, $http, $state, $stateParams) {
    setTimeout(function () {
        $scope.infoParams = {};
    },5);
    //初始化
    $scope.getTabList = function () {
        $scope.infoParams.startAt = Date.parse($scope.startAt);
        $scope.infoParams.endAt = Date.parse($scope.endAt);
        //起止时间//
        if ($scope.infoParams.startAt === $scope.infoParams.endAt) {
            $scope.infoParams.endAt = $scope.infoParams.startAt + 1000*60*60*24-1;
        }
        if ($scope.infoParams.startAt > $scope.infoParams.endAt) {
            bootbox.alert({
                message: "时间错误！",
                size: "small"
            });
        }
        if (isNaN($scope.infoParams.startAt)) {
            $scope.infoParams.startAt = "";
        }
        if (isNaN($scope.infoParams.endAt)) {
            $scope.infoParams.endAt = "";
        }
        $http({
            method: "GET",
            url: "/carrots-admin-ajax/a/article/search",
            params: $scope.infoParams
        }).then(
            function successCallback(response) {
                $scope.article = response.data.data.articleList;
                $scope.total = Math.ceil(response.data.data.total / response.data.data.size);        //总页数向上取整
                $scope.article_page = [];
                for (var i = 1; i < ($scope.total + 1); i++) {
                    $scope.article_page[i - 1] = i;
                }
                $scope.inputNum = response.data.data.page;
                // console.log($scope.inputNum);
            },
            function errorCallback(response) {
                bootbox.alert("服务器请求失败，再一次！");
            }
        );
        // console.log(getTabList());
    };
    // console.log(getTabList());
    if ($stateParams !== undefined) {
        $scope.infoParams = $stateParams;
        // console.log($scope.infoParams);
        $scope.startAt = new Date($scope.infoParams.startAt);
        $scope.endAt = new Date($scope.infoParams.endAt);
        $scope.infoParams.page = 1;
        $scope.getTabList();
    } else {
        $scope.infoParams = {page:1};
        $scope.getTabList();
    }
     // console.log($scope.infoParams);
    //搜索//
    $scope.search = function () {
        console.log("搜索按钮连接成功");
        $scope.infoParams.startAt = Date.parse($scope.startAt);
        $scope.infoParams.endAt = Date.parse($scope.endAt);

        if ($scope.infoParams.startAt < $scope.infoParams.endAt) {
            $scope.infoParams.endAt = $scope.infoParams.endAt + 1000*60*60*24-1;
        }
        // 选中时间相等的时候会导致搜索错误，当相等的时候使后一天增加23小时59分钟，这样就搜索时间区间了
        if($scope.infoParams.startAt === $scope.infoParams.endAt ){
            $scope.infoParams.endAt = $scope.infoParams.startAt + 1000*60*60*24-1;
        }
        if (isNaN($scope.infoParams.startAt)) {
            $scope.infoParams.startAt = "";
        }
        if (isNaN($scope.infoParams.endAt)) {
            $scope.infoParams.endAt = "";
        }
        $scope.infoParams.page = 1;
        $scope.getTabList();
    };

    //清空///////
    $scope.reset = function () {
        console.log("清空按钮连接成功");
        $scope.startAt = "";
        $scope.endAt = "";
        $scope.infoParams = {page:1};
        $scope.getTabList();
    };
    //新增&&    //编辑
    $scope.addEdit = function (id) {
        console.log("新增按钮连接成功");
        $state.go("backNav.articleList-newData",{id:id});
    };

    //改变上线-下线-草稿-在线
    $scope.changeStatus = function (id, status) {
        console.log("上下线按钮连接成功");
        if (status === 1) {
            bootbox.confirm("是否上线？",function (result) {
                if (result) {
                    status = 2;
                    $http({
                        method: "PUT",
                        url: "/carrots-admin-ajax/a/u/article/status",
                        params: {
                            id : id,
                            status : status
                        }
                    }).then(
                        function successCallback(response) {
                            if (response.data.code === 0) {
                                bootbox.alert({
                                    message: "成功修改！",
                                    size: "small"
                                });
                                $scope.getTabList();
                            } else {
                                bootbox.alert("注入失败！" + response.data.message);
                            }
                        },
                        function errorCallback(response) {
                            bootbox.alert("注入失败，请重新登录！");
                            console.log("失败" + response.data);
                        }
                    );
                }
            });
        } else {
            bootbox.confirm("是否下线？",function (result) {
                if (result) {
                    status = 1;
                    $http({
                        method: "PUT",
                        url: "/carrots-admin-ajax/a/u/article/status",
                        params: {
                            id : id,
                            status : status
                        }
                    }).then(
                        function successCallback(response) {
                            if (response.data.code === 0) {
                                bootbox.alert({
                                    message: "成功修改！",
                                    size: "small"
                                });
                                $scope.getTabList();
                            } else {
                                bootbox.alert("注入失败！" + response.data.message);
                            }
                        },
                        function errorCallback(response) {
                            bootbox.alert("注入失败，请重新登录！");
                            console.log("失败" + response.data);
                        }
                    );

                }
            });
        }
        // console.log(status);
    };

    // $scope.editData = function (id) {
    //     console.log("Data编辑按钮连接成功");
    //     $state.go("backNav.articleList-newData",{id:id});
    // };

    //删除
    $scope.delData = function (id) {
        console.log("删除按钮连接成功");
        bootbox.confirm("确认删除本条数据？",
            function (result) {
                if (result) {
                    $http({
                        method: "delete",
                        url: "/carrots-admin-ajax/a/u/article/" + id
                    }).then(function successCallback(response) {
                            console.log(response);
                            if (response.data.code === 0) {
                                bootbox.alert({
                                    message: "成功删除！",
                                    size: "small"
                                });
                            }
                        },function errorCallback(response) {
                            bootbox.alert("请求失败！" + response.data.message);
                        }
                    );
                    $scope.getTabList();
                }
            }
        );
    };



    //首页
    $scope.firstPage = function () {
        console.log("首页按钮连接成功");
        $scope.infoParams.page = 1;
        $scope.getTabList();
    };
    //上一页
    $scope.prePage = function () {
        console.log("上一页按钮连接成功");
        if ($scope.infoParams.page > 1) {
            $scope.infoParams.page--;
        } else {
            bootbox.alert({
                message: "已经是第一页了！",
                size: "small"
            });
        }
        $scope.getTabList();
    };
    //下一页
    $scope.nextPage = function () {
        console.log("下一页按钮连接成功");
        if ($scope.infoParams.page < $scope.total) {
            $scope.infoParams.page++;
        } else {
            console.log($scope.infoParams.page);

            bootbox.alert({
                message: "已经是最后一页了！",
                size: "small"
            });
        }
        $scope.getTabList();
    };
    //尾页
    $scope.lastPage = function () {
        console.log("尾页按钮连接成功");
        $scope.infoParams.page = $scope.total;
        $scope.getTabList();
    };


    //页码跳转（Jump）
    $scope.jumpPage = function (x) {
        console.log("页码跳转按钮连接成功");
        console.log(x);
        if (x > $scope.total) {
            bootbox.alert({
                message: "请不要超过最大页数！",
                size: "small"
            });
            $scope.infoParams.page = 1
        }else {
            $scope.infoParams.page = x;
        }
        $scope.getTabList();
    };

    //输入页码跳转（input）
    $scope.inputPage = function () {
        console.log("Go按钮连接成功");
        if (isNaN($scope.infoParams.page)) {
            bootbox.alert({
                message: "请输入数字！",
                size: "small"
            });
            $scope.infoParams.page = 1;
        } else if ($scope.infoParams.page < 1) {
            $scope.infoParams.page = 1;
        } else if ($scope.infoParams.page >= 1 && $scope.infoParams.page <= $scope.total) {
            console.log('bingo!');
        } else {
            bootbox.alert({
                message: "最大页数为" + $scope.total,
                size: "small"
            });
            $scope.infoParams.page = $scope.total;
        }
        $scope.getTabList();
        // console.log(getTabList());
    };
});
