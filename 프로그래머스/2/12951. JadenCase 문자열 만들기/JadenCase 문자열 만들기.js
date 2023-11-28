function solution(s) {
    let sArray = s.split(' ');
    let answer = sArray.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase());
    return answer.join(' ');
}