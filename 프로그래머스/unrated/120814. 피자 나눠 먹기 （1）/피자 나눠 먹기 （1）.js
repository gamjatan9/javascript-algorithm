function solution(n) {
    count = n/7;
    if (count < 1) {
        answer = 1;
    } else {
        if (n%7 > 0) {
            answer = ~~count + 1;
        } else {
            answer = count;
        }  
    };
    return answer;
}