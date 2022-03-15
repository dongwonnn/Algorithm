#### 01번. 셋 중 최솟값

- Math.min 활용

```javascript
function solution(a, b, c) {
  const ans = Math.min(a, b, c);

  console.log(ans);
  return ans;
}

const a = 6;
const b = 5;
const c = 11;
solution(a, b, c);
```

#### 2번. 삼각형 판별하기

- 삼각형 성질 이용

```javascript
function solution(a, b, c) {
  const sum = a + b + c;
  const longest = Math.max(a, b, c);
  const rest = sum - longest;
  const isTriCheck = longest - rest < 0;

  console.log(isTriCheck ? 'YES' : 'NO');
  return isTriCheck ? 'YES' : 'NO';
}

const a = 6;
const b = 7;
const c = 11;
solution(a, b, c);
```

#### 3번 연필 개수

- Math 객체 이용.
  - 올림: ceil
  - 내림: floor
  - 반올림: round

```javascript
function solution(a) {
  const ans = Math.ceil(a / 12);

  //const ans = parseInt(a/12) + 1;
  console.log(ans);

  return parseInt(a / 12) + 1;
}

const a = 178;
solution(a);
```

#### 4번. 1부터 N까지 합 출력하기

- 배열로 변환후 reducer 메서드 실행

```javascript
function solution(a) {
  const arr = Array.from({ length: a }, (\_, i) => i + 1);
  const sum = arr.reduce((a, b) => a + b);
  console.log(sum);

  return sum;
}

const a = 10;
solution(a);
```

#### 5번. 최솟값 구하기 (배열)

- 배열을 이용한 Math.min

```javascript
function solution(arr) {
  const min = Math.min(...arr);
  //const min = Math.min.apply(null, arr);

  console.log(min);
  return min;
}

const arr = [5, 3, 7, 11, 2, 15, 17];
solution(arr);
```

#### 6번 홀수

- filter 메서드 이용. 홀수 filter

```javascript
function solution(arr) {
  const oddArr = arr.filter((v) => v % 2 === 1);
  const sum = oddArr.reduce((a, b) => a + b);
  const min = Math.min.apply(null, oddArr);

  // for(let x of arr){
  // // 관련 로직..
  // }

  console.log(sum);
  console.log(min);
}

const arr = [12, 77, 38, 41, 53, 92, 85];
solution(arr);
```

#### 7번. 10부제

```javascript
function solution(num, arr) {
  const count = arr.filter((v) => v % 10 === num).length;
  console.log(count);
}

const num = 3;
const arr = [25, 23, 11, 47, 53, 17, 33];

// const num = 0;
// const arr = [12, 20, 54, 30, 87, 91, 30];
solution(num, arr);
```

#### 8번 일곱 난쟁이

```javascript
function solution(arr) {
  const sum = arr.reduce((a, b) => a + b);
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len + 1; j++) {
      if (sub - arr[i] - arr[j] === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
}

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr);
```

#### 9번 A를 #으로

- 문자열 메서드 replace 사용

```javascript
function solution(string) {
  const transString = string.replace('A', '#');
  console.log(transString);
}

const string = 'BANANA';
solution(string);
```

#### 10번. 문자찾기

1. 모든 경우 비교 하는 방법
2. `split('R')` 이용해 전체 수에서 빼는 방법

```javascript
function solution(string, target) {
  const count = string.split('').filter((v) => v === target).length;
  console.log(count);
}

const string = 'COMPUTERPROGRAMMING';
const target = 'R';
solution(string, target);
```

#### 11번 대문자 찾기

1. 모든 경우 비교하는 방법
   - toUpperCase(): 대문자로 변경
   - toLowerCase(): 소문자로 변경
2. 아스키 코드 이용하는 방법
   - 소문자 a~z : 97~122
   - 대문자 A~Z : 65~90
   - A.charCodeAt(): 65
   - String.fromCharCode(65): 'A'

```javascript
function solution(string) {
  const temp = string.split('').filter((v) => v === v.toUpperCase()).length;
  console.log(temp);
}

const string = 'KoreaTimeGooD';
solution(string);
```

#### 12번 대문자로 통일

```javascript
function solution(string) {
  const ans = string
    .split('')
    .map((v) => (v = v.toUpperCase()))
    .join('');
  console.log(ans);
}

const string = 'ItIsTimeToStudy';
solution(string);
```

#### 13번 대소문자 변환

```javascript
function solution(string) {
  const arr = string.split('');

  const newArr = arr.map((v) => {
    if (v === v.toUpperCase()) return v.toLowerCase();
    else return v.toUpperCase();
  });

  console.log(newArr.join(''));
}

const string = 'StuDY';
solution(string);
```

#### 14번 가장 긴 문자열

```javascript
function solution(string) {
  const numArr = string.map((v) => (v = v.length));
  console.log(numArr);
}

const string = ['teacher', 'time', 'student', 'beautiful', 'good'];
solution(string);
```

#### 15번 가운데 문자 출력

- string.subString(a,b): a ~ b-1 인덱스의 문자 자르기

```javascript
function solution(string) {
  const len = string.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    // 짝수인 경우
    console.log(string.subString(mid - 1, mid + 1));
  } else {
    // 홀수인 경우
    console.log(string.subString(mid, mid + 1));
  }
}

const string = 'good';
solution(string);
```

#### 16번 중복 문자 제거

1. Set 이용
   - 배열에서 중복값 제거하는 방법 : `const newArr = [...new Set(arr)]`
2. indexOf 이용
   ```javascript
        const s = 'ksekkset';
       for(let i = 0 ; i < s.length ; i++){
           console.log(s[i],i, s.indexOf(s[i]);
           // k 0 0
           // s 1 1
           // e 2 2
           // k 3 0 -> 앞에서 0번째 인덱스로 검출되었기 때문에 0
           // 즉, i와 s.indexOf(s[i])가 같지 않다면 앞에 이미 나온 문자임을 뜻함.
       }
   ```

```javascript
function solution(string) {
  const ans = [...new Set(string)].join('');

  console.log(ans);
}

const string = 'ksekkset';
solution(string);
```

#### 17 중복 단어 제거

```javascript
function solution(string) {
  const ans = [...new Set(string)].join(' ');
  console.log(ans);
}

const string = ['good', 'time', 'good', 'time', 'student'];
solution(string);
```
