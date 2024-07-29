function solution(numbers) {
    const sum = numbers.reduce((acc, cur) => acc + cur);
    const answer = (sum / numbers.length).toFixed(1);
    return answer;
}