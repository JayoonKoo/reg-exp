const str = `
010-1234-5678
thesecond@gmail.com
https://www.google.com/
The quick bronwn fox jumps over the lazy dog.
abbcccdddd
`;
// 생성자
// g -> 플래그 문자열에서 모두 검색
// i -> 소문자 대문자 구분 안하고 검색
// const regexp = new RegExp('the', 'gi'); 

// 리터럴 방식
// const regexp = /the/gi;
///////////////////////////////////////////////////////////


// 메서드
const regexp = /fox/gi;
// console.log(regexp.test(str));
console.log(str.replace(regexp, 'koo'));