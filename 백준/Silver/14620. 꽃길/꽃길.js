const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input.shift()); 
let arr = input.map(item => item.split(" ").map(Number));

const MAX = 200*200*200; //최대 비용
let least = MAX;

//꽃 심을 수 있으면 1, 없으면 0 반환
const saveCheck = (list, cnt, i, j) => {  
  if (cnt === 0) return 1;
  let check = 1;
  list.forEach(element => { //좌표값 차의 절댓값의 합
    if (Math.abs(element[0]-i) + Math.abs(element[1]-j) < 3) check = 0;
  });
  return check;
}

const flower = (list, ground, expense, sum, cnt) => {
  if (cnt == 3) {
    least = Math.min(least, sum);
    return;
  }

  for (let i = 1; i < N - 1; i++) {
    for (let j = 1; j < N - 1; j++) {
      if (ground[i][j] === 0 && saveCheck(list,cnt, i, j) ) {
        const cost = expense[i][j] + expense[i + 1][j] + expense[i - 1][j] + expense[i][j + 1] + expense[i][j - 1];
        list.push([i, j]);
        ground[i][j] = 1;
        
        flower(list, ground, expense, sum + cost, cnt + 1);
        
        list.pop();
        ground[i][j] = 0;
      }
    }
  }
}

function solution(N, expense) {
    let ground = Array.from(new Array(N), ()=> new Array(N).fill(0));
    flower([], ground, expense, 0, 0);
    console.log(least);
}

solution(N, arr);