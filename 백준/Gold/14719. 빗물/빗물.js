const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const block = input[1].split(' ').map(Number);

function solution(H, W, block) {
  let amountOfWater = 0;

  // 왼쪽 최대 높이와 오른쪽 최대 높이 구한 뒤, 둘 중 더 낮은 것을 basisHeight로 지정함.
  // basisHeight에서 각 블록의 높이만큼 빼줌
  for (let i = 1; i < W - 1; i++) {
    const leftMaxHeight = Math.max(...block.slice(0, i));
    const rightMaxHeight = Math.max(...block.slice(i + 1)); //4
    const basisHeight = Math.min(leftMaxHeight, rightMaxHeight); //3

    if (block[i] < basisHeight) { 
      amountOfWater += basisHeight - block[i];
    }
  }

  return amountOfWater;
}

console.log(solution(H, W, block));