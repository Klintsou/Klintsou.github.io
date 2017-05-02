function Loader() {
  this.data = {};
}

Loader.prototype.load = function(method,callback) {
    var xhr = new XMLHttpRequest();
    var API_KEY = '66acefb3e925145c96839c0cb52299f5';
    var SOURCE = 'http://ws.audioscrobbler.com/2.0/';
    xhr.open('GET', SOURCE + '?method=' + method + '&api_key=' + API_KEY + '&format=json', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback.apply(xhr);
      }
    }
    xhr.send();
};
