# 정규표현식(RegExp)

정규식, Regular Expression

## 역할
- 문자 검색(search)
- 문자 태체(replace)
- 문자 추출(extract)


## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]'. 'gi')

// 리터럴
/표현/옵션
/[a-z]/gi
```


## 예제 문자
```js
const str = `
010-1234-5678
thesecond@gmail.com
https://www.google.com/
The quick bronwn fox jumps over the lazy dog.
abbcccdddd
`;
```

## 메소드
메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부(Boolean) 반환
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체
split | `문자열.split(정규식)`| 일치하는 문자열을 분할하여 배열(Array)로 반환