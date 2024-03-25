const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const prices = input[1].split(' ').map(Number);

const answer = solution(n, prices);
console.log(answer.trim());

function solution(n, prices) {
  const bnp = {
    money: n,
    stock: 0,
  };
  const timing = {
    money: n,
    stock: 0,
  };

  for (let i = 0; i < prices.length; i++) {
    if (bnp.money / prices[i] >= 0) {
      bnp.stock += Math.floor(bnp.money / prices[i]);
      bnp.money -= Math.floor(bnp.money / prices[i]) * prices[i];
    }
  }

  for (let i = 3; i < prices.length; i++) {
    let zero = prices[i - 3];
    let first = prices[i - 2];
    let second = prices[i - 1];
    let third = prices[i];
    
    //3일 연속 상승 -> 전량 매도
    if (zero > first && first > second && second > third) {
      timing.stock += Math.floor(timing.money / prices[i]);
      timing.money -= Math.floor(timing.money / prices[i]) * prices[i];
    }
    //3일 연속 하락 -> 전량 매수
    if (zero < first && first < second && second < third) {
      timing.money += timing.stock * prices[i];
      timing.stock = 0;
    }
  }

  return result(bnp, timing);
}

function result(bnp, timing) {
  bnp.money = bnp.money + bnp.stock * prices[prices.length - 1];
  timing.money = timing.money + timing.stock * prices[prices.length - 1];

  if (bnp.money > timing.money) {
    return 'BNP';
  } else if (bnp.money < timing.money) {
    return 'TIMING';
  } else {
    return 'SAMESAME';
  }
}