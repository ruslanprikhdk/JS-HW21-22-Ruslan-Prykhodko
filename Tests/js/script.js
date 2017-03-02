var test = { 

  pow: function (num, power) {

    var num;
    var power;
    var k;
    var result;

    if(num%1 == 0 && power%1 == 0) {
      if(power==0) {
        result=1;
        return result;
        console.log('result =', result);
      } else if(power<0) {
        result=num;
          for (k = 1; k<Math.abs(power); k++) {
          result=result*num;
          }
        result=1/result;
        return result;
        console.log('result =', result);
      } else {
        result=num;
        for (k = 1; k<power; k++) {
        result = result * num;
        }
        return result;
        console.log('result =', result);
      }
    } else {
    result = 'Wrong number format';
    return result;
    console.log('result =', result);
    }
  }
}

module.exports = test;

//test.pow(prompt('number', 2), prompt('power', 2));
