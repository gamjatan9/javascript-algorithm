function solution(numer1, denom1, numer2, denom2) {
    let a = numer1 * denom2 + numer2 * denom1;
    let b = denom1 * denom2;
    let max = 1;
    
    for (i=1; i<=b; i++){
        if(a%i === 0 && b%i === 0) {
            max = i;
        }
    }
    
    let answer = [a/max, b/max];
    return answer;
}