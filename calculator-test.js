
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 50000,
    years:  7,
    rate: 3.4
  }
  expect(calculateMonthlyPayment(values)).toEqual('669.72')
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 50000,
    years:  10,
    rate: .6
  }
  expect(calculateMonthlyPayment(values)).toEqual('429.40')
});

/// etc
