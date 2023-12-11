function solution(n) {
    let dp = [0, 1, 2];
    if(n <= 2) return dp[n];
    const divider = 1234567;
    for(let i=3; i<=n; i++){
        dp[i] = (dp[i-1] + dp[i-2]) % divider;
    }
    return dp[n];
}