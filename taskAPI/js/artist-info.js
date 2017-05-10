function ArtistInfo() {
  Loader.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Loader.prototype);
ArtistInfo.prototype.constructor = Loader;

ArtistInfo.prototype.getInfo = function (name) {
  this.load('artist.getinfo&artist=' + name, function () {
    this.data = JSON.parse(this.responseText);
    console.log('Artist info:');
    console.log(this.data);
  });
};
