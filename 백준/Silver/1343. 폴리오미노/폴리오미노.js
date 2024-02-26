const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = input[0];

function solution(n) {
	n = n.replace(/XXXX/g, 'AAAA');
	n = n.replace(/XX/g, 'BB');

	return n.split('').includes('X') ? -1 : n;
}

const answer = solution(n);
console.log(answer);