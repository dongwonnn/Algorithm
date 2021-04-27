### 문제

**N개의 최소공배수** [https://programmers.co.kr/learn/courses/30/lessons/12953](https://programmers.co.kr/learn/courses/30/lessons/12953)

### 해결

1. 최소공배수 구하는 방법
   두 수의 곱 / 두 수의 최대 공약수
2. N개일 때
   첫 두 수의 최소공배수를 구하고, 이 수는 다음 수와 최소공배수를 구할 때 사용한다.
   즉, 2, 6, 14라면 첫 두 수의 최소 공배수 6과 다음 수 14와 최소공배수를 구한다.
   2-1. reduce를 이용해 최소공배수를 누적 시킨다.

### 코드

```javascript
function solution(arr) {
  // 최대공약수 구하기
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);

  // 최소공배수 구하기
  // const lcd = (a * b) / gcd(a, b);

  // 여러 개의 최소공배수 구하기
  // reduce 사용 2 => 6 => 24 => 168
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}
```
