#### 1. 자릿수의 합

- 생각나는대로 해봤는데 효율적이지 못할듯. 강의보고 정리하자..

```javascript
function solution(arr) {
  const n = arr.length;
  const strArr = arr.map((v) => v + '');
  const sumArr = [];

  for (let i = 0; i < n; i++) {
    const sum = strArr[i].split('').reduce((a, b) => parseInt(a) + parseInt(b));
    sumArr.push(sum);
  }

  const max = Math.max(...sumArr);
  let ans = -1;

  for (let i = 0; i < n; i++) {
    const cur = sumArr[i];

    if (cur === max) {
      ans = Math.max(ans, strArr[i]);
    }
  }

  console.log(ans);
}

const arr = [128, 460, 603, 40, 521, 137, 123];
solution(arr);
```
