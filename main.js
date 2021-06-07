const str = `
010-1234-5678
thesecond@gmail.com
https://www.google.com/
The quick bronwn fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이
`;
// 생성자
// g -> 플래그 문자열에서 모두 검색
// i -> 소문자 대문자 구분 안하고 검색
// const regexp = new RegExp('the', 'gi'); 

// 리터럴 방식
// const regexp = /the/gi;
///////////////////////////////////////////////////////////


// 메서드
// const regexp = /fox/gi;
// console.log(regexp.test(str));
// console.log(str.replace(regexp, 'koo'));
///////////////////////////////////////////////////////////



// 플래그
// console.log(str.match(/the/gi));
// console.log(str.match(/\.$/gim));
///////////////////////////////////////////////////////////



// 패턴 (표현)
// console.log(
//   str.match(/d$/gm)
// );
// console.log(
//   str.match(/^t/gm)
// );
// console.log(
//   str.match(/h..p/g)
// );
// console.log(
//   str.match(/fox|dog/g)
// );
// console.log(
//   str.match(/https?/g)
// );
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// );
// console.log(
//   str.match(/[0-9]{1,}/g)
// );
// console.log(
//   str.match(/[가-힣]{1,}/g)
// );
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// );
// const v = `   the hello world

// !`;

// console.log(
//   v.replace(/\s/g, '')
// )


console.log(
  str.match(/.{1,}(?=@)/g)
)
console.log(
  str.match(/(?<=@).{1,}/g)
)
