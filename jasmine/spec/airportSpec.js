describe ('airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
});

  it('should be able to land a plane', function(){
    airport.land(plane);
    expect(airport.runway).toInclude(plane);
  });
});
