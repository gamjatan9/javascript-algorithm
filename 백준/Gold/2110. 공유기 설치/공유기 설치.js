const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, C] = input.shift().split(' ').map(Number);
let data = input.map(item => item.split('\n').map(Number));
data.sort((a, b) => a -b); //정렬

let start = 1;
let end = data[data.length - 1];

while (start <= end) {
  const mid = Math.floor((start + end) / 2); //중간값

  let count = 1;
  let prev = data[0];

  for (let cur of data) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < C) end = mid - 1; //공유기 개수 체크
  else start = mid + 1;
}

console.log(end);