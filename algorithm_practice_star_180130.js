/*
1. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
ex)
0
2
4
6
8
*/

for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/*
2. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 작은 수부터 문자열로 출력하시오.
ex) 02468
*/
for (var i = 0; i < 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

/*
for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/
for (var i = 10; i > 0; i--) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

/*
4. while문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
ex)
9
7
5
3
1
*/
var i = 10;
var j = 0;
while (i > 0) {
  if (i % 2 == 1) {
    console.log(i);
  }
  i--;
  if (i == j)
    break;
}

// 5. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오
// ex) 45
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log('합:' + sum);

// 6. 1부터 20까지의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
// 1, 5, 7, 11, 13, 17, 19 => 79
var sum = 0;
for (var i = 0; i <= 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    console.log(sum);
    sum = sum + i;
  }
}
console.log('합:' + sum);

// 7. 1부터 20까지의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// 2, 3, 4, 6, 8, 9, 10, 12, 14, 15, 16,18, 20 => 137

var sum = 0;
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0 || i % 3 == 0) {
    console.log(i);
    sum = sum + i;
  }
}
console.log('합:' + sum);

/*
8. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하는 코드를 작성하시오.
[ 1, 5 ]
[ 2, 4 ]
[ 3, 3 ]
[ 4, 2 ]
[ 5, 1 ]
*/

for (var i = 1; i <= 5; i++) {
  for (var n = 1; n <= 5; n++) {
    if (i + n == 6) {
      console.log(i + ',' + n);
    }
  }
}

/*
9. 삼각형출력하기

다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관게없다.

// 높이(line)가 5
*
**
***
****
*****
*/

// for triangle
var triangle = ''
for (var i = 1; i <= 5; i++) {
  for (var n = i; n >= 1; n--) {
    triangle = triangle + '*';
  }
  triangle = triangle + '\n';
}
console.log(triangle);


// triangle = '*\n**\n***\n****\n*****\n'

// while triangle
var i = 0;
var triangle = '';
while (i < 5) {
  triangle = triangle + '*';
  i++;
  console.log(triangle);
}



/*
10. 트리 출력하기

다음을 참고하여 *(별)로 트리를 문자열로 완성하라.
개행문자(‘\n’)를 사용하여 개행한다. 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관게없다.

// 높이(line)가 3일때 + 높이(line)가 5일때
*
**
***
*
**
***
****
*****
*/

// console.log('*\n**\n***\n*\n**\n***\n****\n*****\n')

var tree = ''
for (var i = 1; i <= 3; i++) {
  for (var n = i; n >= 1; n--) {
    tree = tree + '*';
  }
  tree = tree + '\n';
}
for (var i = 1; i <= 5; i++) {
  for (var n = i; n >= 1; n--) {
    tree = tree + '*';
  }
  tree = tree + '\n';
}
console.log(tree);



function drawTrainale(height) {
  if (!Number.isInteger(height) || height <= 0) {
    // console.log('invail:  + ' height);
    // return
    throw new Error('invalid parameter');
  }
  var star = '';
  for (var i = 0; i < height; i++) {
    for (var j = 0; j <= i; j++) {
      star += '*';
    }
  }
  console.log(star);
}

drawTrainale(3)