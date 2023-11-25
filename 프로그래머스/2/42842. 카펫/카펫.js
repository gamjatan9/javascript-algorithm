function solution(brown, yellow) {
    let w = 0;
    let h = 0;
    let sum = 0;
    let sub = 0;
    
    sum = brown / 2 + 2;
    sub = Math.sqrt((sum) ** 2 - 4 * (brown + yellow));
    w = (sum + sub) / 2;
    h = (sum) - w;
    
    return [w, h];
}