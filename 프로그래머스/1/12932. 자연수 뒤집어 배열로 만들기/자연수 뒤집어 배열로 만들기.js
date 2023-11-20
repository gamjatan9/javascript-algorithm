function solution(n) {
    return String(n)
        .split('')
        .reverse()
        .map(i => parseInt(i));
}