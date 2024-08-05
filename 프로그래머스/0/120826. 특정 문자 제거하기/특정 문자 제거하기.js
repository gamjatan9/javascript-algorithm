function solution(my_string, letter) {
    var answer = my_string.replaceAll(letter, '');
    // var regex = new RegExp(letter, 'g');
    // var answer = my_string.replace(regex, '');
    return answer;
}