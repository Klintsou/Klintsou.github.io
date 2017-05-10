function Searcher() {
  Loader.apply(this, arguments);
}

Searcher.prototype = Object.create(Loader.prototype);
Searcher.prototype.constructor = Loader;

Searcher.prototype.search = function (name) {
  this.load('artist.search&artist=' + name, function() {
    this.data = JSON.parse(this.responseText);
    console.log('Artist search:');
    console.log(this.data);
  });
}
