'use strict';

function runTest() {
    var totalTime,
        start,
        iterations,
        myObj;

    console.log('Object.create(null)');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = Object.create(null);
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('Object.create({})');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = Object.create({});
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('new Object()');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = new Object();
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);

    console.log('{}');
    start = (new Date()).getTime();
    iterations = 1000000;
    while (iterations--) {
        myObj = {};
    }
    totalTime = (new Date()).getTime() - start;
    console.log('\ttotalTime: ' + totalTime);
    console.log('--------------------------');
};

var showName = (function () {
    var name = 'LEVIS3';
    return {
        getName : function () {
            return name;
        }
    };
}());
console.log(showName.getName());

function myFunction () {
    var str = document.getElementById("demo").innerHTML;
    var n = str.replace("sdlfsjdflsjdlfkj", "replace test success!");
    document.getElementById("demo").innerHTML= n;
};