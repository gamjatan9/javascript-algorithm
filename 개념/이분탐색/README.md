<h3>이분탐색</h3>

- 정렬되어 있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법
- 이진 탐색은 배열 내부의 데이터가 정렬되어 있어야만 사용할 수 있는 알고리즘이다.
- 변수 3개(start, end, mid)를 사용하여 탐색한다. 찾으려는 데이터와 중간점 위치에 있는 데이터르 반복적으로 비교해서 원하는 데이터를 찾는 것이 이진 탐색의 과정이다.

<br />

참고: https://velog.io/@kimdukbae/%EC%9D%B4%EB%B6%84-%ED%83%90%EC%83%89-%EC%9D%B4%EC%A7%84-%ED%83%90%EC%83%89-Binary-Search

<br />
<h3>javascript 코드</h3>

```
const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length-1
  let mid = 0;
  
  while(start <= end){ //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다
  
  mid = parseInt((start+end)/2)
  
  if(target === arr[mid]){
    return mid;
  } else{
    if(target<arr[mid]){
      end = mid-1
    }
    else{
      start = mid+1
    }
  }
  }
  return -1

};
```