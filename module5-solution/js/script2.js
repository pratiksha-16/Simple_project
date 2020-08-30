(function (window) {
  var byespeak = {};
  var speakWord = "Good Bye";
  byespeak.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.byespeak = byespeak;
})(window);