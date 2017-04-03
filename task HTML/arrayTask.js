function isArrayFirst(arr) {
  return arr instanceof Array;
}

function isArraySecond(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

function range(start, end, step) {
  var arr = [];
  if (end == undefined || end == null) {
    end = start;
    start = 0;
  }
  if (step == undefined || step == null) {
    step = 1;
  }
  while (step > 0 ? end > start : end < start) {
    arr.push(start);
    start += step;
  }
  return arr;
}

function compactFirst(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function compactSecond(arr) {
  return arr.filter(function(value){
    return value;
  });
}

function sumFirst(arr) {
  var sum = 0;
  for(var i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function sumSecond(arr) {
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

function unique(arr) {
  var newArray = []; 
  for(var i = 0; i < arr.length; i++) 
  {
    if (newArray.indexOf(arr[i]) == -1) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function last(arr) {
  return arr[arr.length - 1];
}

function excludeLast(arr, count) {
  if (count === undefined) {
    count = 1;
  }
  var excludeArr = arr.slice(0, arr.length - count); 
  return excludeArr;
}

//Array true
var a = [];
var b = [1, "text", {}];
var c = new Array();
//Array false
var d = 13;
var e = {};
var f = null;
var g = undefined;
var h = "Array";
var i = true;
var j = false;
console.log("---Check isArray---");
console.log("---------------------------------------------");
console.log("first method:second method");
console.log("---------------------------------------------");
console.log(isArrayFirst(a) + ":" + isArraySecond(a));
console.log(isArrayFirst(b) + ":" + isArraySecond(b));
console.log(isArrayFirst(c) + ":" + isArraySecond(c));
console.log(isArrayFirst(d) + ":" + isArraySecond(d));
console.log(isArrayFirst(e) + ":" + isArraySecond(e));
console.log(isArrayFirst(f) + ":" + isArraySecond(f));
console.log(isArrayFirst(g) + ":" + isArraySecond(g));
console.log(isArrayFirst(h) + ":" + isArraySecond(h));
console.log(isArrayFirst(i) + ":" + isArraySecond(i));
console.log(isArrayFirst(j) + ":" + isArraySecond(j));
console.log("---------------------------------------------");
console.log("range(10): " + range(10));
console.log("range(1, 10): " + range(1, 10));
console.log("range(1, 10, 3): " + range(1, 10, 3));
console.log("range(10, null, 3): " + range(10, null, 3));
console.log("range(10, null): " + range(10, null));
console.log("range(-2, -5): " + range(-2, -5));
console.log("range(-5, -2): " + range(-5, -2));
console.log("range(-5, -2, 2): " + range(-5, -2, 2));
console.log("range(-5, -2, -2): " + range(-5, -2, -2));
console.log("range(-5, null, 2): " + range(-5, null, 2));
console.log("range(-5, null, -2): " + range(-5, null, -2));
console.log("range(-10, -20, -5): " + range(-10, -20, -5));
console.log("range(-20, -10, -5): " + range(-20, -10, -5));
console.log("---Check compact---");
var compactTest = [0, 1, 2, undefined, 3, null, 4, false, NaN, " ", 5, , "text", 6, , 7];
console.log("compactFirst(" + compactTest + "): " + compactFirst(compactTest));
console.log("compactSecond(" + compactTest + "): " + compactSecond(compactTest));
console.log("---Check sum---");
var sumTest = [0, 2, -5, 10, -6, 4]; //5
console.log("sumFirst(" + sumTest + "): " + sumFirst(sumTest));
console.log("sumSecond(" + sumTest + "): " + sumSecond(sumTest));
console.log("---Check unique---");
var uniqueTest = [1,2,3,3,3,2,5,3,1,"f","g","f"];
console.log("unique(" + uniqueTest + "): " + unique(uniqueTest));
console.log("---Check last---");
var lastTest = [1, 2, 3, 15, -10];
console.log("last(" + lastTest +"): " + last(lastTest));
console.log("---Check excludeLast---");
var excludeLastTest = uniqueTest;
console.log("excludeLast(" + excludeLastTest + "): " + excludeLast(excludeLastTest));
console.log("excludeLast([" + excludeLastTest + "], 5): " + excludeLast(excludeLastTest,5));
