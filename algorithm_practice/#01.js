/*
1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.

단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 예를들어 8808은 3, 8888은 4로 카운팅 해야 한다.

(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
*/

function getCount8 () {
  var str = ''; // 1 ~ 10,000의 숫자를 연결하여 문자열로 만들기 위한 변수
  var sum = 0;  // 리턴용 변수

  // looping: 0 ~ 10000
  for (var i = 0; i < 10001; i++) {
    // str += i.toString();
    str += i;
  }

  // console.log(str);

  for (var j = 0; j < str.length; j++) {
    // if (str.charAt(i) === '8') sum++;
    if (str[j] === '8') sum++;
  }

  return sum;
}

console.log(getCount8()); // 4000
