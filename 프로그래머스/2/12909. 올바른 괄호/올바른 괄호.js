function solution(s){
    let count = 0;
    
    for (let i = 0; i < s.length; i++){
        count += s[i] === '(' ? 1 : -1;
        if (count < 0) return false;  // ')'가 먼저 나오면 -1
    }
    return count === 0 ? true : false;  // 개수가 일치하면 count===0

}