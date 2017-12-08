//create by liHoo

'use strict';
//
function abb(x) {
    if (typeof x !== 'number') {
        throw 'Not a Sb Number!';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
abb('hack');
//
var abs = function (x) {

    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};
abs(100);
abs(-10);
//
function foo(x) {
    console.log('x = ' + x);
    for (var i = 0, len = arguments.length; i < len; i++) {
        console.log('arg' + i + '=' + arguments[i]);

    }
}
foo(10, 20, 30);
//
function asd() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

asd();
asd(10);
asd(-77);

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(15,77));
