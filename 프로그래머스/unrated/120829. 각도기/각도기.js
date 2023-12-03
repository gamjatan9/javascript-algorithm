function solution(angle) {
    let answer = (angle > 0 && angle < 90) ? 1 :
        (angle === 90) ? 2 :
        (angle > 90 && angle < 180) ? 3 :
        (angle === 180) ? 4 : 0;
    
    return answer;
}