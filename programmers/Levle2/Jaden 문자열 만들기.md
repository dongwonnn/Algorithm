### 문제

**Jaden 문자열 만들기** [Jasone 문자열 만들기](Jasone 문자열 만들기)

### 해결

1. 모두 소문자로 바꾼 뒤, 첫 번째 문자만 대문자로 바꿈
2. 띄어쓰기가 두번 연속으로 발생할 수 있는 경우 예외 처리

### 코드

```javascript
function solution(s) {
  s = s.split(" ").map((el) => el.toLowerCase());

  s = s.map((v) => {
    v = v.split("");

    if (v[0] === undefined) return;
    v[0] = v[0].toUpperCase();

    return v.join("");
  });

  return s.join(" ");
}
```
