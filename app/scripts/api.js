var API = (function() {
    var m = window.location.pathname.match(/(.*\/)marcopolo\/index.html/);
    return m && m[1] ? m[1] : '/api/';
})();

var STUDIO_VERSION = "1.7";
