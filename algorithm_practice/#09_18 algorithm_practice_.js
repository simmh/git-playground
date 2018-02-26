/*
9. 정수제곱근 판별하기
nextSqaure함수는 정수 n을 매개변수로 받는다. n이 임의의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 작성하라. 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴한다.

function nextSqaure(n){

}


console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441
*/


function nextSqaure(n) {
  // if (isNaN(n)) return 'no';
  var n = Math.sqrt(n);
  if (Number.isInteger(n)) return Math.pow(n + 1, 2);
  return 'no';
}


console.log(nextSqaure()); // no 
console.log(nextSqaure(0)); // 1
console.log(nextSqaure(1)); // 4
console.log(nextSqaure(2)); // no
console.log(nextSqaure(3)); // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441


/* 
10. Check Palindrom
palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
  
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false
*/

function checkPalindrom(str) {
  function reverseStr(str) {
    var reStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reStr += str[i];
    }
    // console.log('console: ' + str + ' vs ' + reStr)
    return reStr;
  }
  if (str.length > 1 && str === reverseStr(str)) return true;
  return false;
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false
console.log(checkPalindrom('리효리')); // true


/* 
11. 배열의 최대/최소값 구하기
배열의 요소 중 최대값/최소값을 반환하는 함수를 완성하라.

function getMaxValueFromArray(array) {

}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {

}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5
*/

function getMaxValueFromArray(array) {
  var maxValue = array[0];
  for (var i = 0; i < array.length; i++) {
    if (maxValue < array[i]) { maxValue = array[i]; }
  }
  return maxValue;
}
console.log(getMaxValueFromArray([3, 6, -2, -5, 7, 3])); // 7

function getMinValueFromArray(array) {
  var minValue = array[0];
  for (var i = 0; i < array.length; i++) {
    if (minValue > array[i]) { minValue = array[i]; }
  }
  return minValue;
}
console.log(getMinValueFromArray([3, 6, -2, -5, 7, 3])); // -5

``
`
12. 약수의 합
어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고, 총 합은 28이 되므로 28을 반환한다.

약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 배수 관계와 서로 반대되는 개념이다

function sumDivisor(num) {

}

console.log(sumDivisor(12)); // 28
`
``

function sumDivisor(num) {
  var sum = 0;
  for (var i = 1; i < num + 1; i++) {
    if (num % i == 0) sum += i;
  }
  return sum;
}

console.log(sumDivisor(12)); // 28

``
`
13. 소수 찾기
numberOfPrime 메소드는 정수 n을 매개변수로 입력받는다. 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 함수를 완성하라.

소수(素數, prime number)는 양의 약수가 1과 자기 자신 뿐인 1보다 큰 자연수로 정의된다. 즉, 1과 자기 자신으로만 나누어지는 수를 의미한다.

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, …

예를 들어 10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환한다.

function numberOfPrime(n) {

}

console.log(numberOfPrime(10)); // 4
`
``

function numberOfPrime(n) {
  var prime = [];

  function isPrime(n) {
    for (var i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return n;
  }

  for (var i = 2; i < n; i++) {
    if (isPrime(i)) {
      prime.push(i);
    }
  }
  console.log(prime)
  return prime.length;
}

console.log(numberOfPrime(10)); // 4



``
` 

14. 피보나치 수
피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3이라면 2를 반환한다.

function fibonacci(n) {

}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
`
``

function fibonacci(n) {
  var num = [0, 1];

  while ((num.length - 1) < n) {
    num.push(num[num.length - 2] + num[num.length - 1]);
  }

  return num[n];
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

``
`
15. 하샤드 수
하샤드 수는 그 수의 각 자릿수 숫자의 합으로 그 수가 나누어지는 양의 정수를 말한다.

양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 한다. 예를들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.

10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42, 45, 48, 50, 54, 60, 63, 70, 72, 80, 81, 84, 90, 100, 102, 108, 110, 111, 112, 114, 117, 120, 126, 132, 133, 135, 140, 144, 150, 152, 153, 156, 162, 171, 180, 190, 192, 195, 198, 200

Harshad함수는 양의 정수 n을 매개변수로 입력받는다. 이 n이 하샤드수인지 아닌지 판단하는 함수를 완성하라.

예를들어 n이 10, 12, 18이면 True를 리턴 11, 13이면 False를 리턴한다.

function isHarshad(n){

}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false
`
``

function isHarshad(n) {
  var strNum = n.toString();
  var sum = 0;
  for (var i = 0; i < strNum.length; i++) {
    sum += parseInt(strNum[i]);
  }
  if (n % sum == 0) return true
  return false
}

console.log(isHarshad(10)); // true
console.log(isHarshad(12)); // true
console.log(isHarshad(18)); // true
console.log(isHarshad(11)); // false
console.log(isHarshad(13)); // false

``
`
16. 두 정수 사이의 합
adder함수는 정수 x, y를 매개변수로 입력받는다. 두 수와 두 수 사이에 있는 모든 정수를 더해서 리턴하도록 함수를 완성하라.

x와 y가 같은 경우는 둘 중 아무 수나 리턴한다. x, y는 음수나 0, 양수일 수 있으며 둘의 대소 관계도 정해져 있지 않다.

예를들어 x가 3, y가 5이면 12를 리턴한다.

function adder(x, y){

}

console.log(adder(3, 5)); // 12
`
``

function adder(x, y) {
  var min = x;
  var max = y;
  var sum = 0

  if (x > y) {
    min = y;
    max = x;
  }

  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum
}

console.log(adder(3, 5)); // 12

``
`
17. 배열의 첫 요소와 마지막 요소로 배열 만들기
배열의 첫 요소와 마지막 요소를 나타내는 정수를 인자로 받아 정수의 배열을 반환하는 함수를 완성하라. 예를 들어 인수가 [10, 15]인 경우, [ 10, 11, 12, 13, 14, 15 ]를 반환한다.

function generateRange(from, to) {
  const res = [];

  return res;
}

console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
`
``

function generateRange(from, to) {
  const res = [];
  for (var i = from; i <= to; i++) {
    res.push(i)
  }
  return res;
}
console.log(generateRange(10, 15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange(10, -15)); // [ 10, 11, 12, 13, 14, 15 ]
console.log(generateRange(-10, 15)); // [ 10, 11, 12, 13, 14, 15 ]






``
`
18. 배열의 인접한 요소곱 중 가장 큰 값 구하기
정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라. 예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.

function adjacentElementsProduct(arr) {

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
`
``

function adjacentElementsProduct(arr) {
  var max = 0;
  var num = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    num = arr[i] * arr[i + 1]
    if (max < num) max = num
  }
  return max
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21