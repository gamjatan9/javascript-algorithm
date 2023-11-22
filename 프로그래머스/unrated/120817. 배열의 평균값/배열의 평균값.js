function solution(numbers) {
    let sum = numbers.reduce((a, c) => a + c );
    let answer = sum / numbers.length;
    return answer;
}