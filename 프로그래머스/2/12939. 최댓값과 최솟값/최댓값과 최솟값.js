function solution(s) {
    let arr = s.split(' ').map(Number);;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    
    return min + ' ' + max;
}