const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const counsel = input.map(v => v.split(' ').map(Number));

const answer = solution(n, counsel);

console.log(answer);

function solution(n, counsel) {
  const DP = new Array(n).fill(0); //수익 배열
    
  for (let i = 0; i < n; i++) {
    const [day, profit] = counsel[i];
    if (i + day > n) continue; //날짜 초과
    DP[i] += profit;

    for (let j = i + day; j < n; j++) {
      DP[j] = Math.max(DP[j], DP[i]);
    }
  }
  return Math.max(...DP);
}