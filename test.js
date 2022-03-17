// #### 4. 가장 짧은 문자거리
function solution(string, target) {
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
