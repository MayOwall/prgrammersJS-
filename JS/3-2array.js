//array를 만드는 방법
//1. 'Array'함수를 이용하여 제작.
const arr1 = new Array();
//1-2. 길이를 지정하여 'Array'함수를 이용하여 제작.
const arr2 = new Array(5);
//1-3. Array.fill()을 이용하여 필요한 값을 필요한만큼 지정하여 제작.
const arr5 = new Array(5).fill(3);

//2. 빈 중괄호('[]')를 이용하여 제작.
const arr3 = [];
//2-1. 초기값이 있는 중괄호를 이용하여 제작.
const arr4 = ['1', '2', '3', '4', '5'];

//기존의 배열을 새로운 값으로 채워주는 방법.
//1. Array.from()이용하기.
const arr6 = Array.from(Array(5), function (v, k) {
  return k + 1;
});

console.log(arr1);
console.log(arr2);
console.log(arr5);
console.log(arr3);
console.log(arr4);
console.log(arr6);


/*---------------------------------------------------*/
const arr7 = [1, 2, 3, 4, 5];
//배열의 여러가지 요소들.
//.length : 배열의 길이를 number값으로 출력.
console.log(arr7.length);
//.length의 값을 직접 설정함으로서 해당 array 구성요소에 관여할 수 있다.(줄이기, 늘리기 둘 다 가능. *이렇게 직접 관여하는 방식은 사용하지 않는 것을 권장함.)
arr7.length = 3;
console.log(arr7);
arr7.length = 10;
console.log(arr7);

//배열의 여러가지 함수들.
const arr = [1, 2, 3, 4, 5, 6];

/*'.join()' 
- ()안에는 어떤식으로 배열 내 값들을 합칠 것인지 적는 곳.
- 아래 코드는 값들 사이사이에 ', '를 붙여 합하도록 적어 둔 케이스.  
*/
console.log(arr.join(", "));

/*'.reverse()'
- 배열의 모든 값의 순서를  거꾸로 돌려 줌.
- 한번 사용하면 원래의 배열에도 영향이 감. >> 사용에 주의 필요🔥
*/
console.log(arr.reverse());

/*'.concat()'
- 두 배열을 합칠 때 사용하는 함수.
- 기준 함수를 무엇으로 두느냐에 따라 concat의 결과가 달라짐. 
*/
const arrConcat = [7, 8, 9];
console.log(arr.concat(arrConcat));
console.log(arrConcat.concat(arr));
