## 유클리드 호제법(Euclidean algorithm)
- 2개의 자연수 또는 정식의 최대공약수를 구하는 알고리즘
<br>

## 최대공약수(GCD)
- Greatest Common Divisor
- 정수인 두 수의 공약수 중 가장 큰 수
- 두 수를 동시에 나눌 수 있는 수 중 가장 큰 수
```
let getGCD = (num1, num2) => {
  let gcd = 1;

  for(let i=2; i <= Math.min(num1, num2); i++){
      if(num1 % i === 0 && num2 % i === 0) gcd = i;
  }
  
  return gcd;
}

```

- 유클리드 호제법 이용
```
let getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2);
```
<br>

## 최소공배수(LCM)
- Largest Common Multiple
- 정수인 두 수의 공배수 중 가장 작은 수
- 두 수를 곱한 값을 최대 공약수로 나눈 수
```
let getLCM = (num1, num2) =>{
  let lcm = 1;
   
  while(true){
    if((lcm % num1 == 0) && (lcm % num2 == 0)) break;
    lcm++;
  }
  return lcm;
}

```
- num1 * num2  === GCD * LCM
```
let getLCM = (num1, num2) => {
  return (num1 * num2) / getGCD(num1, num2);
}

```