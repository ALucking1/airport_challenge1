function Airport(){
  this.runway = [];
};

Airport.prototype.viewRunway = function(){
  return this.runway;
};


Airport.prototype.land = function(plane){
  if(this.isStormy()) {throw new Error("Weather is too stormy to land");};
  this.runway.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  if(this.isStormy()) {throw new Error("Weather is too stormy to take off");};
  var index = this.runway.indexOf(plane);
  this.runway.splice(index, 1);
};

Airport.prototype.isStormy = function() {
  var weather = new Weather;
  if(weather == "stormy"){
    return true;
  } else {
    return false;
  };
};
