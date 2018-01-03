/**
 * Created by odd-hoo on 2017/12/19.
 */
// var app = angular.module('myApp',['ui.router', 'oc.lazyLoad', 'angularFileUpload', 'ngCookies']);
// angular.module('myApp', ['ngRoute'])
//     .config(['$routeProvider', function ($routeProvider) {
//         $routeProvider
//             .when('/login',{
//                 templateUrl: 'html/login.html'
//             })
//             .when('/home',{
//                 templateUrl: 'html/articleList1.html'
//             })
//             .when('/add',{
//                 templateUrl: 'html/add.html'
//             })
//             .otherwise({
//                 redirectTo: '/login'
//             });
//     }]);

var adminApp = angular.module("myApp", ['ui.router',"oc.lazyLoad","ngCookies"]);

adminApp.config(function ($stateProvider, $urlRouterProvider) {

    var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html",
            controller: "myCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controller/backLogin.js',
                    'css/main.css'
                ])
            }
        })
        .state("backNav",{
            url: "/backNav",
            templateUrl: "html/backNav.html"
        })
        .state("backNav.articleList1",{
            url: "/articleList1",
            templateUrl: "html/articleList1.html"
        })
        .state("backNav.articleList2",{
            url: "/articleList2",
            templateUrl: "html/articleList2.html"
        })
        .state("backNav.articleList3",{
            url: "/articleList3?type&status&page&startAt&endAt&total",
            templateUrl: "html/articleList3.html",
            controller: "articleCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controller/articleList.js',
                    'js/factory/constant.js',
                    'js/factory/filter.js'
                ])
            }
        })
        .state("backNav.articleList-newData",{
            url: "/articleList-newData?id",
            templateUrl: "html/articleList-newData.html",
            controller: "newDataCtrl",
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/wangEditor-3.0.15/release/wangEditor.css',
                    'js/wangEditor-3.0.15/release/wangEditor.js',
                    'js/controller/articleList-New.js'
                ])
            }
        })
});
