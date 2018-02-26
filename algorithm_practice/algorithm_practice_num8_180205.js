var str = "Hello";

for (var i = 0; i < str.length; i++) {
  console.log(str[i].charAt());
}
//-----------
var str = "Hello";
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}
//------------

var str = "Hello";
var count = 0;
for (var i = 0; i < str.length; i++) {
  if (str[i] === 'l') count++;
}
console.log(count); //2

//-------------

// 1~10,000의 숫자 중 8이 등장하는 휫수 구하기
function getCount8() {
  var count = 0;
  for (var i = 0; i < 10000; i++) {
    str = i + ''
    for (var j = 0; j < str.length; j++) {
      if (str[j] === '8') count++;
    }
  }
  return count
}
console.log(getCount8());

function getCount8() {
  var all = '';
  var cnt = 0;

  for (var i = 1; i < 10001; i++) {
    all += i;
  }

  for (var j = 0; j < all.length; j++) {
    if (all.charAt(j) === '8') cnt++;
  }
  return cnt;
}
console.log(getCount8());




//실패
var str = ['1234', '9014', '723', 'a234', '']

function alphaString46(s) {
  if ((4 <= s.length <= 6) && !isNaN(s)) {
    return true
  } else {
    return false
  }
}
console.log(alphaString46(s[1]));

//

function alphaString46(s) {
  if (!s) return false;
  if ((s.lenght >= 4 && s.length <= 6) && !isNaN(s)) {
    return true
  }
  return false;
}