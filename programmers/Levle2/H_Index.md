### 문제

**H_Index** [https://programmers.co.kr/learn/courses/30/lessons/42747](https://programmers.co.kr/learn/courses/30/lessons/42747)

### 해결

1. **완전탐색**

   - 인용된 횟수의 최댓값부터 0까지 탐색하면서 조건에 맞는 h_index를 찾아냈습니다.
   - 이 경우 인용 횟수 최대 10000회, 배열의 길이 1000 으로 1초가 넘지 않습니다.

2. **정렬, index 이용**

   - H_Index는 많이 인용된 순으로 정렬한 후, 피인용수가 논문수와 같아지거나 논문수보다 작아지는 숫자가 h입니다.
     예외로 모두 탐색했는데도 없다면 논문 수의 개수가 답입니다.
   - 이 방법으로 풀면 `O^N`으로 풀 수 있습니다.
     [참고](https://www.ibric.org/myboard/read.php?Board=news&id=270333) ~~근데 이걸 어떻게 알지.. 천재들이 많네..~~

### 코드

#### 1. 완전탐색

```javascript
function solution(citations) {
  let answer = 0;
  const max_num = Math.max(...citations);

  for (let h_index = max_num; h_index >= 0; h_index--) {
    const moreCnt = citations.filter((v) => v >= h_index).length;
    const lessCnt = citations.filter((v) => v <= h_index).length;

    if (moreCnt >= h_index && lessCnt <= h_index) {
      answer = h_index;
      break;
    }
  }

  return answer;
}
```

#### 2. 정렬

```javascript
function solution(citations) {
  let answer = -1;
  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) {
      answer = i;
      break;
    }
  }

  if (answer === -1) answer = citations.length;

  return answer;
}
```
