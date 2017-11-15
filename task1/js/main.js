
function flashStart() {

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
    console.log(out);


    var choose_num = document.getElementsByClassName("box") [0];             //获取到每个格子的dom，然后随机取三个数，
    choose_num.style.backgroundColor = "#27b280";                            //随机取一个颜色

}


function flashEnd() {
    alert("别闪了~");
}








