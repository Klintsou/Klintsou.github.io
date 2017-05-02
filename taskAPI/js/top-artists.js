function TopArtists() {
  Loader.apply(this, arguments);
}

TopArtists.prototype = Object.create(Loader.prototype);
TopArtists.prototype.constructor = Loader;

TopArtists.prototype.getTopArtists = function () {
  this.load('chart.gettopartists', function() {
    this.data = JSON.parse(this.responseText);
    console.log('Top artists:');
    console.log(this.data);
  });
}
