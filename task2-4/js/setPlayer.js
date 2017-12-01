/**
 * Created by odd-hoo on 2017/11/18.
 */

//两个input获取输入值
var roleNumber = document.getElementById("playerNum");
var roleBar = document.getElementById("playBar");

function getValue() {
    if (roleNumber.value >= 4 && roleNumber.value <= 18) {
        roleBar.value=roleNumber.value;
    } else {
        alert('请输入4-18之间的数字！');
        roleBar.value = 4;
        roleNumber.value = 4;
    }
}

function change() {
    roleNumber.value = roleBar.value;
}
//加号连接range取数
function minus() {
    roleBar.value--;
    roleNumber.value = roleBar.value;
    if (roleNumber.value < 4) {
        roleBar.value = 4;
    } else {
        roleNumber.value = roleBar.value;
    }
}
//减号连接range取数
function plus() {
    roleBar.value++;
    roleNumber.value = roleBar.value;
    if (roleNumber.value > 18) {
        roleBar.value = 18;
    } else {
        roleNumber.value = roleBar.value;
    }
}


var killer = [];
var farmer = [];
// var array = [];

function shuffle(array) {

    killer = Math.floor(roleNumber.value/4);
    farmer = roleNumber.value - killer;
    // console.log(killer);
    // all.length = roleNumber.value;

    // 深拷贝array数组
    var _array = array.concat();
    // 确定平民人数
    for(var f = 0; f < roleNumber.value; f++) {
        _array[f] = '平民';
    }
    // 确定杀手人数
    for(var k = 0; k < killer; k++) {
        _array[k] = '杀手';
    }

   // 将总人数角色分配打乱顺序
    for (var i = roleNumber.value; i--; ) {
        var j = Math.floor(Math.random() * (i + 1));       //值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
        var temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
    }
    // console.log(_array);
    return _array
}


//点击设置--获取input内的玩家数量
function setPlayerNumber() {

    var _array = new Array;
    var q = [];
    q = shuffle(_array);
    console.log(q);
    var randomRole = '';
    for (x = 0; x < roleNumber.value; x++) {
            randomRole
            += '<div class="dynamic">'
                + '<span class="dynamic-role">'
                    + q[x]
                + '</span >'

                + '<span class="dynamic-num">'
                    + (x+1)
                + '号</span>'
            + '</div>';
    }

    // var a = document.getElementsByClassName('list-style');

    $(".list-style").eq(0).html(randomRole);


    // var setRole = document.getElementById('playerNum').value;
    // // alert(setRole);
}



//利用创建dom，把平民、杀手人数加入到ul中

// function setPlayerNumber() {
//
//     for (z = 1; z <= roleNumber.value; z++ ) {
//         var farm = document.createElement("li");
//         var node = document.createTextNode( z + '号' + );
//         farm.appendChild(node);
//
//         var element = document.getElementById("role-list");
//         element.appendChild(farm);
//     }
//
//
// }

