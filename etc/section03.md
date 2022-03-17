#### 1. 회문 문자열

- 편의상 다 소문자로 바꾼다.
  배열로 바꿀 필요없다. 걍 문자열.toLowerCase() 하면 된다.

1. 문자열을 비교하자
2. 처음과 끝을 비교하자. 이럴경우 O(n/2);

```javascript
function solution(string) {
  const arr = string.toLowerCase();
  // const arr = string
  //   .split('')
  //   .map((v) => v.toLowerCase())
  //   .join('');
  const reverseArr = [...arr.split('')].reverse().join('');

  const check = arr === reverseArr;

  console.log(check ? 'YES' : 'NO');
}

const string = 'gooG';
solution(string);
```

#### 2. 문자열 압축

- 정규식 이용. 필요한 것만 추출하자.
  repalce(/[^a-z]/g, ''): a-z가 아닌것을 모두 ''로 치환한다.

```javascript
function solution(string) {
  let answer = 'YES';
  string = string.toLowerCase();

  const newStr = string.replace(/[^a-z]/g, '');
  const reverseStr = newStr.split('').reverse().join('');

  if (newStr !== reverseStr) answer = 'No';

  console.log(answer);
}

const string = 'found7, time: study; Yduts; emit, 7Dnuof';
solution(string);
```

#### 3. 숫자만 추출

1. charCodeAt으로 숫자만을 감지
2. Number.isInteger(), inNaN()로 숫자를 뽑기
   필터로 숫자만 뽑고 합치고 정수화
3. 정규식 이용. 숫자만 추출해라.

```javascript
function solution(string) {
  // 2번
  // const arr = string
  //   .split('')
  //   .filter((v) => Number.isInteger(parseInt(v)))
  //   .join('');

  // console.log(parseInt(arr));

  // 1번
  string = string.toLowerCase();
  const newStr = string.replace(/[^0-9]/g, '');

  console.log(parseInt(newStr));
}

const string = 'g0en2T0s8eSoft';
solution(string);
```

#### 4. 가장 짧은 문자거리

1. 포문을 돌면서 왼쪽, 오른쪽 비교, 최소값을 이용했다.
   이 경우 O(n^2) -> 나쁜 풀이..
2. 오른쪽, 왼쪽 모두 적어놓고 작은 값을 넣는다. -> O(n)
   첫 단어에는 Infinity를 설정한다. 반대편에서 계산할 때 최솟값으로 들어가기 위해.

```javascript
function solution(string, target) {
  // 1번 풀이
  // const len = string.length;
  // const arr = string.split('');
  // const ans = [];
  // for (let i = 0; i < len; i++) {
  //   const cur = arr[i];
  //   let leftCnt = 1;
  //   let rightCnt = 1;
  //   if (cur === target) {
  //     ans.push(0);
  //     continue;
  //   }
  //   for (let j = i + 1; j < len; j++) {
  //     const next = arr[j];
  //     if (next === target || !next) {
  //       break;
  //     } else rightCnt++;
  //   }
  //   for (let j = i - 1; j >= 0; j--) {
  //     const prev = arr[j];
  //     if (prev === target || !prev) {
  //       break;
  //     } else leftCnt++;
  //   }
  //   const min = Math.min(leftCnt, rightCnt);
  //   ans.push(min);
  // }
  // console.log(ans);

  // 2번 풀이
  const len = string.length;
  const arr = string.split('');
  const ans = [];

  let p = Infinity;
  for (let i = 0; i < len; i++) {
    const cur = arr[i];

    if (cur === target) {
      p = 0;
      ans.push(p);
    } else {
      p++;
      ans.push(p);
    }
  }

  p = Infinity;
  for (let i = len - 1; i >= 0; i--) {
    const cur = arr[i];

    if (cur === target) {
      p = 0;
    } else {
      p++;
      ans[i] = Math.min(ans[i], p);
    }
  }

  console.log(ans);
}

const string = 'teachermode';
const target = 'e';
solution(string, target);
```

#### 5. 문자열 압축

- 문자열에 바로 +하도록 해도됨. 굳이 배열에 push 하지 않고..

```javascript
function solution(string) {
  const len = string.length;
  const ans = [];
  let count = 1;

  for (let i = 0; i < len; i++) {
    const cur = string[i];
    const next = string[i + 1];

    if (cur === next) {
      count++;
    } else {
      ans.push(cur);

      if (count !== 1) {
        ans.push(count);
      }

      count = 1;
    }
  }

  console.log(ans.join(''));
}

const string = 'KKHSSSSSSSE';
solution(string);
```
