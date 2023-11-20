function solution(myString, pat) {
    const pattern = pat.toLowerCase(); //소문자로 변환
    
    return myString.toLowerCase().includes(pattern) ? 1 : 0;
}