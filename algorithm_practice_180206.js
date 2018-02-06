/*
5. 이상한 문자만들기
toWeirdCase함수는 문자열 s를 매개변수로 입력받는다. 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라. 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO', 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {

}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
*/

function toWeirdCase(s) {
  //sprit ' '
  var str = s.split(' ');
  var str2 = '';
  var word2 = '';
  for (var i = 0; i < str.length; i++) { // 'hello world to ['hello', 'world']
    word = str[i]; //[hello]
    for (var j = 0; j < word.length; j++) { //[h,l,l,o]
      if (j % 2 == 0) {
        //짝수 인덱스 대문자로
        // console.log('up: ' + word[j]);ㄴ
        var up = word[j];
        up = up.toUpperCase();
        // console.log('up: ' + up)
        // word[j] = up
        word2 = word2 + up;
      } else {

        var low = word[j];
        low = low.toLowerCase();

        word2 = word2 + low;
      }
    }
    str2 = ' ' + word2;
  }
  return str2;
}
console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'

//문장을 split 으로 공백 기준으로 잘라 워드 배열을 만들고 포문을 돌린다
//워드 문자 길이만큼 포문을 돌린다 
// 2나머지 따라 홀짝 분기하고
// 문자 길이 순회 횟수를 인덱스 넣어
//변수에 따로 복사 하고 다시 인덱스 찾아 바꿔 넣는다