/*
2. 짝수와 홀수
evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, num이 음수인 경우는 없다. num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.


// if문
function evenOrOdd(num) {

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even
*/

// if문
function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even'
  }
  return 'Odd'

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3항 연산자
function evenOrOdd(num) {
  return (num % 2 === 0 ? 'Even' : 'Odd')
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even


/* 
4. 문자열 내 p와 y의 개수
numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
대소문자를 구별하지 않으며 
s에 ‘p’의 개수와 ‘y’의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
‘p’, ‘y’ 모두 하나도 없는 경우는 항상 true를 리턴한다. 
예를들어 s가 ‘pPoooyY’면 true를 리턴하고 ‘Pyy’라면 false를 리턴한다.


function numPY(s) {

}

console.log(numPY(‘pPoooyY’)); // true
console.log(numPY(‘Pyy’));     // false
console.log(numPY(‘ab’));      // true
console.log(numPY(‘’));        // true
console.log(numPY());          // true

*/

function numPY(s) {
  if(!s) return true;

  function count(s, char) {
    var s = s.toUpperCase();
    var count = 0;
    for (var i = 0; i < s.length; i++) {
      if (s[i] == char) count++;
    }
    return count;
  }   

  var numP = count(s,'P');
  var numY = count(s, 'Y');

  if (numP == numY) {
    return true
  }
  return false
}

console.log('pPoooyY: ' + numPY('pPoooyY')); // true
console.log('Pyy: ' + numPY('Pyy'));     // false
console.log('ab: ' + numPY('ab'));      // true
console.log("'': " + numPY(''));        // true
console.log(' :' + numPY());          // true
