function isArrayFirst(arr) {
  return Array.isArray(arr);
}

function isArraySecond(arr) {
  return (arr instanceof Array);
}

function isArrayThird(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
}

function range(arg1, arg2, arg3) {
  if (arg1 === undefined || (Math.sign(arg1) != 1 && arg2 === undefined)) {
    return [];
  }
  var arr;
  var i = 0;
  if (arg2 === undefined) {
    arr = [arg1];
    for (i; i < arg1; i++) {
      arr[i] = i;
    }
    return arr;
  }
  var value = arg1;
  if (arg3 === undefined) {
    var count = Math.abs(arg2 - arg1);
    arr = [count];
      for (i; i < count; i++) {
        arr[i] = arg1 > arg2 ? value-- : value++;
      }
    return arr;
  }
  arr = [];
  var step = Math.abs(arg3);
  if (arg1 < arg2) {
    while (value <= arg2) {
      arr[i++] = value;
      value += step;
    }
  } else {
    while (value >= arg2) {
      arr[i++] = value;
      value -= step;
    }
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
    return value ? true : false;
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
  for (var i = 0; i < count; i++) {
    arr.pop();
  }
  return arr;
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
console.log("first method:second method:third method");
console.log("---------------------------------------------");
console.log(isArrayFirst(a) + ":" + isArraySecond(a) + ":" + isArrayThird(a));
console.log(isArrayFirst(b) + ":" + isArraySecond(b) + ":" + isArrayThird(b));
console.log(isArrayFirst(c) + ":" + isArraySecond(c) + ":" + isArrayThird(c));
console.log(isArrayFirst(d) + ":" + isArraySecond(d) + ":" + isArrayThird(d));
console.log(isArrayFirst(e) + ":" + isArraySecond(e) + ":" + isArrayThird(e));
console.log(isArrayFirst(f) + ":" + isArraySecond(f) + ":" + isArrayThird(f));
console.log(isArrayFirst(g) + ":" + isArraySecond(g) + ":" + isArrayThird(g));
console.log(isArrayFirst(h) + ":" + isArraySecond(h) + ":" + isArrayThird(h));
console.log(isArrayFirst(i) + ":" + isArraySecond(i) + ":" + isArrayThird(i));
console.log(isArrayFirst(j) + ":" + isArraySecond(j) + ":" + isArrayThird(j));
console.log("---------------------------------------------");
console.log("---Check range---");
console.log("range(5): " + range(5));
console.log("range(-10): " + range(-10));
console.log("range('b'): " + range('b'));
console.log("range(10): " + range(10));
console.log("range(1,5): " + range(1, 5));
console.log("range(1,-5): " + range(1, -5));
console.log("range(1,10,2): " + range(1,10,2));
console.log("range(1,-10,2): " + range(1,-10,2));
console.log("range(10,-5,-3): " + range(10,-5,-3));
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
