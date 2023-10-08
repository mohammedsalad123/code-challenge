let speed = 40; //declared speed variable
let demerit;//declared demerit points
//called a function speedcalculator
function speedCalculator() { //used if statement and else if for if speed is less than 70 to return ok
    if (speed <= 70) {
        return "OK";
    }
    else if (speed > 70){ //if speed is greater than the 70 demerit point exceed by 1 point
        demerit = ((speed - 70) / 5);
    } 
    if (demerit >12) { //if demerit point exceed 12 then return licenses suspended
        return "Licence suspended";
    }

  return `points: ${demerit}`;
}
  console.log (speedCalculator(40))
    
