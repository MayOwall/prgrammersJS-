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
//배열의 여러가지 요소들.
const arr7 = [1, 2, 3, 4, 5];
//.length : 배열의 길이를 number값으로 출력.
console.log(arr7.length);
//.length의 값을 직접 설정함으로서 해당 array 구성요소에 관여할 수 있다.(줄이기, 늘리기 둘 다 가능. *이렇게 직접 관여하는 방식은 사용하지 않는 것을 권장함.)
arr7.length = 3;
console.log(arr7);
arr7.length = 10;
console.log(arr7);

/*---------------------------------------------------*/
//배열의 여러가지 함수들.
let arr = [1, 2, 3, 4, 5, 6];

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
arr.reverse();

/*'.concat()'
- 두 배열을 합칠 때 사용하는 함수.
- 기준 함수를 무엇으로 두느냐에 따라 concat의 결과가 달라짐. 
*/
const arrConcat = [7, 8, 9];
console.log(arr.concat(arrConcat));
console.log(arrConcat.concat(arr));

/*'.push()'
- 배열의 끝에 값을 추가하는 함수.
- 한번에 여러개의 값도 추가할 수 있음.
*/
arr.push("push1", "push2");
console.log(arr);

/*'.pop()'
- 배열의 끝에 값을 뺄 수 있는 함수.
- 한번에 하나의 값만 뺄 수 있음.
*/
arr.pop();
console.log(arr);
arr.pop();
console.log(arr);

/*'.shift()', '.unshift()'
- 배열의 첫번째 index에 값을 추가, 삭제할 수 있는 함수.
*/
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);

/*'.slice()'
- 배열 중간을 잘라 값을 확인 할 수 있는 함수.
- 첫번째 parameter는 slice를 시작할 index번호, 두번째 parameter는 slice를 끝낼 'index번호 + 1'를 나타냄.
- 한번 사용해도 원래의 배열에도 영향이 가지 않음. > 이에 주의!🔥
*/
console.log(arr.slice(2,4));
console.log(arr);

/*'.splice()'
- 배열 중간 값들을 삭제 할 수 있는 함수.
- 첫번째 parameter는 splice를 시작할 index번호, 두번째 parameter는 splice를 진행할 index 개수를 나타냄.
- 사용하게 되면 원래의 배열에 영향이 감. >> 이에 주의!!🔥
*/
console.log(arr.splice(2,2));
console.log(arr);

/*----------------------------------------------------*/
//배열을 순회하는 방법.
arr = [1, 2, 3, 4, 5, 6];
//1. for문 이용하기.
for (let i = 0; i < 6; i++) {
  console.log(arr[i]);
};

//2. for of 이용하기.
//기존의 1 방식보다 직관적이기에, 2번 방법을 더 추천함.
for (const item of arr) {
  console.log(item);
};

/*---------------------------------------------------*/
//배열은 객체처럼 사용할 수 있음.
//참고로 이렇게 배열을 객체처럼 사용하는 것은 올바른 배열의 사용법은 아니기 때문에, 추천하지 않음.
console.log(typeof arr);
arr["key"] = "value";
console.log(arr);
//다만 위와같이 값을 추가했을 때, 기존 배열의 길이는 바뀌지 않음.(배열이 JS에서 특수한 객체이기 때문)
console.log(arr.length);


/*---------------------------------------------------*/
//객체.
//객체 생성 방법
//1. new Object()를 통해 빈 객체 생성하기.
const obj1 = new Object();
//2. 중괄호를 통해 빈 객체 생성하기.
const obj2 = {};
//3. key, value입력을 통해 초기화값이 있는 객체 생성하기.
const obj3 = {name: '오월', status: '졸유를 빙자한 백수'};


//객체 값 추가 방법.
const obj4 = {name: '객체 값 추가하기'};
//1. obj[key값] = value;
obj4['방법1'] = '대괄호 이용하기';
//2. obj.key값 = value;
obj4.방법2 = '점을 이용하기';

//객체 값 삭제 방법 : 'delete'
const obj5 = {name1: '객체', name2: '값 ', name3: '삭제하기'};
delete obj5.name3;

//객체 내 특정 key 유무 확인하기 : 'in'
console.log('name1' in obj5);
console.log('name3' in obj5);

//객체의 key 집합을 알아내는 방법 : 'Object.keys()'
console.log(Object.keys(obj5));

//객체의 value 집합을 알아내는 방법 : 'Object.values()'
console.log(Object.values(obj5));

//객체를 순회하는 방법 : 'for in'문법
for(const key in obj5) {
  console.log(key, obj5[key]);
};