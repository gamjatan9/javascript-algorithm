function solution(n) { 
    const N = Math.floor(n / 2);
    const answer = N * (N + 1);
    return answer;
}