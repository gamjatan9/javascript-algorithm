const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input.shift().split(' ');
const trees = input[0].split(' ').map(Number).sort((a,b) => a-b); //정렬

function solve(arr, target) {
    let start = 0;
    let end = arr[arr.length-1]; 
    let answer = 0;

    while(start <= end) {
        let mid = Math.floor((start + end)/2); //중간값
        let sum = 0;
        for(let x of arr) {
            if(x > mid) sum += x-mid; //잘린 나무의 합
        }

        if(sum >= target) { //나무 길이 확인
            if(mid > answer) answer = mid; 
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return answer;
}

console.log(solve(trees, M))