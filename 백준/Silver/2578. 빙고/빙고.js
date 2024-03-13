const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const inputs = input.map((nums) => nums.split(' ').map((num) => Number(num)));
const bingo = inputs.slice(0, 5); //빙고판
const target = inputs.slice(5, 10); //사회자가 부르는 수

// 사회자가 부른 숫자를 0으로 마킹
function markBingo(bingoBoard, num) {
  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
          if (bingoBoard[i][j] === num) {
              bingoBoard[i][j] = 0; 
          }
      }
  }
}

// 빙고 검사
function checkBingo(bingoBoard) {
  let count = 0;

  // 가로, 세로 검사
  for (let i = 0; i < 5; i++) {
      if (bingoBoard[i].every(v => v === 0)) count++;
      let colCheck = true;
      for (let j = 0; j < 5; j++) {
          if (bingoBoard[j][i] !== 0) {
              colCheck = false;
              break;
          }
      }
      if (colCheck) count++;
  }

  // 대각선 검사
  if (bingoBoard.every((row, i) => row[i] === 0)) count++;
  if (bingoBoard.every((row, i) => row[4 - i] === 0)) count++;

  return count >= 3; // 3개 이상의 빙고가 완성되었는지 여부 반환
}

function findBingo(bingoBoard, calls) {
  for (let k = 0; k < calls.length; k++) {
      for (let l = 0; l < calls[k].length; l++) {
          markBingo(bingoBoard, calls[k][l]);
          if (checkBingo(bingoBoard)) {
              return k * 5 + l + 1; // 사회자가 몇 번째 수를 부른 후 빙고가 완성되는지 반환
          }
      }
  }
}

console.log(findBingo(bingo, target));