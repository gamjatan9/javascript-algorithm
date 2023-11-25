//연속되는 자연수들의 합으로 표현할 수 있는 방법의 수는 
//n의 약수 중에서 홀수인 수의 개수와 같다.
function solution(n) {
    let answer = 0;
    for (let i=0; i<=n; i++){
        if(n%i === 0 && i%2 === 1) answer++;
    }
    return answer;
}