function loadScript(url, callback) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.onload = callback;
  head.appendChild(script);
}

var loaderLoad = function () {
  var albumLoad = function () {
    var albumInfo = new AlbumInfo();
    albumInfo.getInfo('skillet', 'awake');
  };

  var topArtistsLoad = function () {
    var topArtists = new TopArtists();
    topArtists.getTopArtists();
  };

  var artistInfoLoad = function () {
    var artistInfo = new ArtistInfo();
    artistInfo.getInfo('John L. Cooper');
  };

  var searchLoad = function () {
    var artistSearch = new Searcher();
    artistSearch.search('cher');
  };

  loadScript('./js/album-info.js', albumLoad);
  loadScript('./js/top-artists.js', topArtistsLoad);
  loadScript('./js/artist-info.js', artistInfoLoad);
  loadScript('./js/artist-search.js', searchLoad);
};

loadScript('./js/loader.js', loaderLoad);
