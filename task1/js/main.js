function flashStart() {
    "use strict";
    function colorFlash() {                          //随机取得三个颜色
            //原数组
            var arr = [0,1,2,3,4,5,6,7,8];
            //输出数组
            var out = [];
            //输出个数
            var num = 3;
            while(out.length < num) {
                var temp = (Math.random()*arr.length) >> 0;
                out.push(arr.splice(temp,1));
            }
            //用for循环替代
            var choose_num = document.getElementsByClassName("box");            //进行DOM节点控制
            for (var i=0, len=out.length; i<len; i++) {
                choose_num[out[i]].style.backgroundColor = randomColor() ;         //获取到每个格子的dom，然后随机取三个数.
            }
            function randomColor () {                                             // randomColor ()
                const r = Math.round(Math.random()*255);
                const g = Math.round(Math.random()*255);
                const b = Math.round(Math.random()*255);
                const a = ( (Math.random()*5 + 5) / 10 ).toFixed(2);
                //随机颜色返回的是一个0.5到1 的两位小数;
                const color = `rgba(${r},${g},${b},${a})`;
                // console.log(color)
                return color;
            }
            for (var j = 0; j < arr.length; j++) {
                choose_num[arr[j]].style.backgroundColor = "#ff7f00";         //获取到每个格子的dom，然后随机取三个数.
            }
        }
    clearInterval(window.myVar);                                                                    //停止变色并重置颜色
    window.myVar = setInterval(function () { colorFlash() }, 1000);             //定义一个反复执行的调用
}
function flashEnd() {
    clearInterval(window.myVar);                                                                    //停止变色并重置颜色
    var choose_num = document.getElementsByClassName("box");            //进行DOM节点控制
        var arr = [0,1,2,3,4,5,6,7,8];
        for (x = 0; x < arr.length; x++) {
            choose_num[arr[x]].style.backgroundColor = "#ff7f00";
        }
}
