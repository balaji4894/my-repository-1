describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://localhost:9000/#/wkcg');

    element(by.model('text1')).sendKeys('Balaji');
    var greeting = element(by.binding('text1'));
    console.log(greeting);
  });
  
});
