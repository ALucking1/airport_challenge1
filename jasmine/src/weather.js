function Weather(){
  this.weatherOptions = ["sunny","sunny","sunny","stormy"];
};

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
};

Weather.prototype.currentWeather = function() {
  return this.weatherOptions.random();
};
