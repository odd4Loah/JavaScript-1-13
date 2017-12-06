

// var message;
// alert();
// alert(age);
//
// var car = null;
// console.log(typeof car);




Array.prototype.shuffle = function() {
    var input = this;
    for (var i = input.length - 1; i >= 0; i--) {
                        //7
        var j = Math.floor(Math.random() * (i + 1));        //6 + 1   //7
                         //向下取整     //取[0,1)的数字
                                        //0.7     //0.7 * 7 = 4.9  //4
        //获取小于this.length的随机整数
        var faker = input[j];        //4
        input[j] = input[i];         //
        input[i] = faker;            //input[j]和input[i]交换值
    }
    return input;
}


var butterFaker = [0,1,2,3,4,5,6,7];

function shuffle(array) {

    var gangster = array.concat();

    for (var i = butterFaker.length; i--; ) {
        var j = Math.floor(Math.random() * (i + 1));       //值 = Math.floor(Math.random() * 可能值的总数 + 第一个可能的值)
        var temp = gangster[i];
        gangster[i] = gangster[j];
        gangster[j] = temp;
    }
// console.log(gangster);
    return gangster;
}


if (!Array.prototype.shuffle) {
    Array.prototype.shuffle = function() {
        for (var j, x, i = this.length; i; j = parseInt(Math.random() * i),
            //解析一个字符串，并返回一个整数
            x = this[--i], this[i] = this[j], this[j] = x);
            return this;
    };
}

var arr = [1,2,3,4,5,6,7,8,9,10];
var x = 0;
for(var i = 0; i < 100000; i++) {
    shuffle(arr);
    if( arr[0] === 1 ) {
        x++;
    }
}
console.log(x);



var ar = [1,2,3,4,5];
var ider=['杀手','杀手','杀手','杀手','平民'];
var myar = [];
for(var i in ar) {
    obj3={idCard:ar[i],identity:ider[i]};
    myar.push(obj3);
}
alert(myar[4].identity);