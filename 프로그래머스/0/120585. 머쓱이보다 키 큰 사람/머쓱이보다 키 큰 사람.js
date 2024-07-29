function solution(array, height) {
    const answer = array.filter((x) => x > height);
    return answer.length;
}