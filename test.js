// #### 2. 뒤집은 소수
function solution(arr) {
  const n = arr.length;
  const newArr = arr
    .map((v) => v + '')
    .map((x) => x.split('').reverse().join(''))
    .map((el) => parseInt(el));

  console.log(newArr);
}

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr);
