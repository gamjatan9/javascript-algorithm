function solution(n)
{
    let count = 0;
    while(true) {
        if (n===1)  {
            count++;
            break;
        }
        if (n % 2 === 1) {
            count++;
            n = n - 1;
        } else {
            n = n / 2;
        }
    }
    return count;
}