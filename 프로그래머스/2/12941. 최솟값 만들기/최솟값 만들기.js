function solution(A,B){
    //오름차순 정렬
    A.sort(function(a, b)  {
      return a - b;
    }); 
    
    //내림차순 정렬
    B.sort(function(a, b)  {
      return b - a;
    });
    
    //누적 최솟값
    let answer = A.map((value, index) => value * B[index]).reduce((acc, curr) => acc + curr, 0);
    

    return answer;
}