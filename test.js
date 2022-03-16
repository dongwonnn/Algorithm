// #### 1. 큰 수 출력하기
// function solution(arr) {
//   const ans = [arr[0]];
//   const len = arr.length;

//   for (let i = 1; i < len; i++) {
//     const prev = arr[i - 1];
//     const cur = arr[i];

//     if (prev < cur) ans.push(cur);
//   }

//   console.log(ans);
// }

// const arr = [7, 3, 9, 5, 6, 12];
// solution(arr);

// #### 2. 큰 수 출력하기
// function solution(arr) {
//   const len = arr.length;
//   let canShowHeight = arr[0];
//   let count = 1;

//   for (let i = 1; i < len; i++) {
//     const cur = arr[i];

//     if (canShowHeight < cur) {
//       canShowHeight = cur;
//       count++;
//     }
//   }

//   console.log(count);
// }

// const arr = [130, 135, 148, 140, 145, 150, 150, 153];
// solution(arr);

// #### 3. 가위바위보
// function solution(arr1, arr2) {
//   const len = arr1.length;
//   const ans = [];

//   // 1: 가위
//   // 2: 바위
//   // 3: 보

//   for (let i = 0; i < len; i++) {
//     const A = arr1[i];
//     const B = arr2[i];
//     const res = B - A;

//     if (res === 1 || res === -2) ans.push('B');
//     else if (res === -1 || res === 2) ans.push('A');
//     else ans.push('D');
//   }

//   console.log(ans);
// }

// const arr1 = [2, 3, 3, 1, 3];
// const arr2 = [1, 1, 2, 2, 3];
// solution(arr1, arr2);

// #### 5. 등구구하기
// function solution(arr) {
//   const len = arr.length;
//   const ans = [];

//   for (let i = 0; i < len; i++) {
//     const me = arr[i];
//     let score = 1;

//     for (let j = 0; j < len; j++) {
//       if (i === j) continue;
//       const other = arr[j];

//       if (me < other) score++;
//     }

//     ans.push(score);
//   }

//   console.log(ans);
// }

// const arr = [87, 89, 89, 100, 89];
// solution(arr);

// #### 6. 격자판 최대합
// function solution(arr) {
//   const num = arr.length;
//   let max = -Infinity;

//   // 행 계산
//   for (let i = 0; i < num; i++) {
//     const rowSum = arr[i].reduce((a, b) => a + b);
//     max = Math.max(max, rowSum);
//   }

//   // 열 계산
//   // 회전해보자.. 나중에..
//   for (let i = 0; i < num; i++) {
//     let colSum = 0;
//     for (let j = 0; j < num; j++) {
//       colSum += arr[j][i];
//     }

//     max = Math.max(max, colSum);
//   }

//   // 대각선 계산
//   let rightDownCrossSum = 0;
//   let rightUpCrossSum = 0;

//   for (let i = 0; i < num; i++) {
//     rightDownCrossSum += arr[i][i];
//     rightUpCrossSum += arr[num - 1 - i][i];
//   }

//   max = Math.max(max, rightDownCrossSum, rightUpCrossSum);

//   console.log(max);
// }

// const arr = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];
// solution(arr);

// #### 7번. 봉우리
// function solution(arr) {
//   const num = arr.length;
//   let ans = 0;
//   const dy = [-1, 0, 1, 0];
//   const dx = [0, 1, 0, -1];

//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       ans++;
//       const me = arr[i][j];

//       for (let k = 0; k < 4; k++) {
//         const y = i + dy[k];
//         const x = j + dx[k];

//         if (y >= 0 && x >= 0 && y < num && x < num) {
//           const target = arr[y][x];

//           if (me < target) {
//             ans--;
//             break;
//           }
//         }
//       }
//     }
//   }

//   console.log(ans);
// }

// const arr = [
//   [5, 3, 7, 2, 3],
//   [3, 7, 1, 6, 1],
//   [7, 2, 5, 3, 4],
//   [4, 3, 6, 4, 1],
//   [8, 7, 3, 5, 2],
// ];
// solution(arr);
