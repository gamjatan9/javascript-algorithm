const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, K] = input[0].split(' ').map(Number);
let wordsList = input.slice(1, N + 1); // 받은 문자열 저장
let alphabetArr = new Array(26).fill(0); // 전체 알파벳 배열 저장 0, 1로 배웠는지 안배웠는지 여부 판단
let readCount = K - 5; // a, c, i, n, t는 기본적으로 배워야하기 때문에 K - 5
let answer = 0; 

if (readCount < 0) { // 기본 단어를 배울 수 없는 경우기 때문에 0 반환
  console.log(0);
  return;
}

// a,c,i,n,t 배움처리
alphabetArr[0] = 1;
alphabetArr[2] = 1;
alphabetArr[8] = 1;
alphabetArr[13] = 1;
alphabetArr[19] = 1;

function dfs(index, readCount) {
  // 종료조건
  if (readCount < 0) { 
    return;
  }

  // 배울 수 있는 알파벳을 다 배웠을 때
  if (readCount === 0) {
    let count = 0;
    // 배운 알파벳들로 읽을 수 있는 단어 확인
    for (let i = 0; i < N; i++) {
      let flag = true; 
      for (let j = 0; j < wordsList[i].length; j++) {
        if (alphabetArr[wordsList[i][j].charCodeAt() - 97] === 0) {
          flag = false; // 안배웠던 단어라면 false로 주고 for문 탈출
          break;
        }
      }
      if (flag) count++;
    }
    answer = Math.max(answer, count);
  }

   // 알파벳 배열 전체 방문
  for (let i = index; i < 26; i++) {
    if (alphabetArr[i] === 0) {
      alphabetArr[i] = 1; // 하나씩 배움 처리
      dfs(i, readCount - 1); // dfs -> 읽을 수 있는 단어 확인
      alphabetArr[i] = 0; // 탐색 완료한 후, 0으로 초기화
    }
  }
};

dfs(0, readCount);
console.log(answer);