describe ('airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
});

  it('should not allow take off if weather is stormy', function(){
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane);}).toThrowError("Weather is too stormy to take off");
  });

  it('should allow take off if weather is sunny', function(){
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.takeOff(plane);
    expect(airport.runway).not.toContain(plane);
  });

  it('should prevent landing when weather is stormy', function(){
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.land(plane);}).toThrowError("Weather is too stormy to land");
  });

  it('should be able to land if weather is sunny', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.runway).toContain(plane);
  });
});
