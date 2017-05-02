function AlbumInfo() {
  Loader.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Loader.prototype);
AlbumInfo.prototype.constructor = Loader;

AlbumInfo.prototype.getInfo = function (artist, album) {
  this.load('album.getinfo&artist=' + artist + '&album=' + album, function() {
    this.data = JSON.parse(this.responseText);
    console.log('Album info:');
    console.log(this.data);
  });
}
