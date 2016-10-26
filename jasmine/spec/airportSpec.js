describe ('airport', function(){
  var airport;
  var plane;
  var battleMountain;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
    battleMountain = new Airport(20);
});

  it('should not allow take off if weather is stormy', function(){
    airport.land(plane);
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){airport.takeOff(plane);}).toThrowError("Weather is too stormy to take off");
  });

  it('should allow take off if weather is sunny', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    airport.land(plane);
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

  it('should have default capacity of 10 if user does not define capacity', function(){
    expect(airport.DEFAULTCAPACITY).toEqual(10);
  });

  it('should have default capacity of 20 when given by user', function(){
    expect(battleMountain.DEFAULTCAPACITY).toEqual(20);
  });

  it('should prevent landing if airport is at capacity', function(){
    spyOn(airport, 'isStormy').and.returnValue(false);
    for(var i=1; i<=battleMountain.DEFAULTCAPACITY; i++){
      battleMountain.land(new Plane());
    };
    expect(function(){battleMountain.land(plane);}).toThrowError("Airport is at capacity");
    });

    // it('should create random stormy status', function(){
    //   expect(airport.isStormy()).toEqual(true);
    // });
  });
