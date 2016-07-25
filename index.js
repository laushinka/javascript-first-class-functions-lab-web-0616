function countdown(callback){
  setTimeout(callback, 2000);
}

function createMultiplier(multiplierValue){
  var fn = function(num){
    return multiplierValue * num
  };
  return fn;
}

doubler = createMultiplier(2)
tripler = createMultiplier(3)

function multiplier(num1, num2){
  return num1 * num2
}

doublerWithBind = createMultiplier.bind(null, 2)
triplerWithBind = createMultiplier.bind(null, 3)
