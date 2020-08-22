(function (window) {
  var hellospeak = {};
  var speakWord = "Hello";
  hellospeak.speak = function (name) {
    console.log(speakWord + " " + name);
  }
  window.hellospeak = hellospeak;
})(window);