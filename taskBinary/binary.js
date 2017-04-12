function binarySearch(arr, key) {
  var first = 0;
  var last = arr.length - 1;
  var middle = undefined;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (key < arr[middle]) {
      last = middle - 1;
    } else if (key > arr[middle]) {
      first = middle + 1;
    } else {
      return middle;
    }
  }
  return -1;
}

function binarySearchRec(arr, key, first, last) {
  var first = first || 0;
  var last = last || arr.length - 1;
  if (first > last) {
    return -1;
  }
  var middle = Math.floor((first + last) / 2);
  if  (key < arr[middle]) {
    return binarySearch(arr, key, first, middle - 1);
  } else if (key > arr[middle]) {
    return binarySearch(arr, key, middle + 1, last);
  }
  return middle;
}

var arr = [0,5,6,10,11,15,17,21,33,35,48,50];
var arr1 = [-50,-40,-35,-33,-30,-15,-5, 1,2,3,6];
var arr2 = [];
var a = 21;
var b = 0;
var c = 50;
var d = 34;
var a1 = -5;
var b1 = -40;
var c1 = -50;
var d1 = 6;
var e1 = -32;
console.log('array: ' + arr);
console.log('search: ' + a + ' result: ' + binarySearch(arr,a) + ', recursion: ' + binarySearchRec(arr,a));
console.log('search: ' + b + ' result: ' + binarySearch(arr,b) + ', recursion: ' + binarySearchRec(arr,b));
console.log('search: ' + c + ' result: ' + binarySearch(arr,c) + ', recursion: ' + binarySearchRec(arr,c));
console.log('search: ' + d + ' result: ' + binarySearch(arr,d) + ', recursion: ' + binarySearchRec(arr,d));
console.log('---------------------------------------------------')
console.log('array: ' + arr1);
console.log('search: ' + a1 + ' result: ' + binarySearch(arr1,a1) + ', recursion: ' + binarySearchRec(arr1,a1));
console.log('search: ' + b1 + ' result: ' + binarySearch(arr1,b1) + ', recursion: ' + binarySearchRec(arr1,b1));
console.log('search: ' + c1 + ' result: ' + binarySearch(arr1,c1) + ', recursion: ' + binarySearchRec(arr1,c1));
console.log('search: ' + d1 + ' result: ' + binarySearch(arr1,d1) + ', recursion: ' + binarySearchRec(arr1,d1));
console.log('search: ' + e1 + ' result: ' + binarySearch(arr1,e1) + ', recursion: ' + binarySearchRec(arr1,e1));
