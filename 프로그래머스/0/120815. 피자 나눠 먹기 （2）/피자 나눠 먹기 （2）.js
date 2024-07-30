function solution(n) {
    let GCD = (a, b) => (a%b ? GCD(b, a%b) : b);
    let LCM = (a, b) => (a*b / GCD(a, b));
    var answer = LCM(n, 6) / 6;
    return answer;
}

  