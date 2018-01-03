/**
 * Created by lihoo on 2017/12/28.
 */

angular.module("myApp")
    .constant('type',[
        {value:0,text:"首页banner"},
        {value:1,text:"找职位banner"},
        {value:2,text:"找精英banner"},
        {value:3,text:"行业大图"}
    ])
    .constant('industry',[
        {value:0,text:"移动互联网"},
        {value:1,text:"电子商务"},
        {value:2,text:"企业服务"},
        {value:3,text:"O2O"},
        {value:4,text:"教育"},
        {value:5,text:"金融"},
        {value:6,text:"游戏"}
    ]);