# es6-inf
모던 자스크립트 개발을 위한 es6 강좌 - 인프런 윤지수 강사님


* jsbin을 통한 실습 진행 ->   (http://jsbin.com)

## let

* let은 변수가 선언된 블록, 구문 또는 표현식 내에서만 유효한 변수를 선언한다. 이는 var 키워드가 블록 범위를 무시하고 전역 변수나 함수 지역 변수로 선언되는 것과 다른 점이다.


```javascript
// 에러 아님 
for (var i = 0; i < 100; i++) {}
console.log(i);


// 에러
for (let i = 0; i < 100; i++) {}
console.log(i);

```
---

## const - 선언된 변수 지키기


* const 키워드 : 상수화시킴. 생성과 동시에 초기화. 이후 재할당 및 변경 불가
* 배열같은 경우 arr[2] = 4; 식으로 변경할 순 있지만, arr = [2,4,5] 이런방식으로 참조를 변경하진 못한다.

* `const를 기본으로 사용하되, 변경이 될 수 있는 변수는 let을 사용하고, var는 사용을 지양한다.`

---
## const 특성과 immutable array

* const를 쓴다고 해서 수정이 안되진 않는다.
    * 배열과 오브젝트의 `값`을 변경하는 것은 가능하다.
    * 참조 변경은 불가능하다. 

* 그러면 immutable array는 어떻게 만드는가?

```javascript

const list = ["apple", "orange", "watermelon"];

list2 = [].concat(list, "banana");
```

* 위처럼 Array.concat() 메소드를 이용하여 만든다. 
    * list는 변하지 않고 list2를 만듬

---
## ES2015(ES6) String에 새로운 메서드

* str.`startsWith(other_str)`
* str.`endsWith(other_str)`
* str.`includes(match_str)`

* 정규표현식 없이 문자열을 쉽게 비교할 수 있다.



---
## for of - 배열 순회

```javascript

var arr = [1,2,3,4];

//foreach
arr.forEach(function(value) {
    console.log(value);
})


// for- in
for (let idx in arr) {
    console.log(arr[idx]);
}

// 문제가 한가지 있다.
// for in을 썼을때는 자기자신이 갖고 있지 않은 상위의 추가 프로퍼티까지 추가해서 결과를 나타낸다.

// ex)

Array.prototype.getIndex = fuction(){}; // 프로퍼티 추가

// 이런 문제가 있으므로 for in은 잘 쓰지 않는게 좋다. 


// for - of

for (let value of arr) {
    console.log(value);
}

// in보다 of를 써서 안전하게 배열을 순회하자.
// 스트링 형태도 분류해서 써준다. 
```

---
## array spread operator(펼침 연산자) - 배열의 복사 



```javascript

let pre = ["apple", "orange", 100];

let newData = [...pre];

console.log(pre);
console.log(newData);

// 둘이 같은 값이 나온다.

console.log(pre === newData); // 결과는 false 
// 둘이 같은 값을 참조하는게 아니고, 메모리에 다른공간에 생긴다 복사. !!!!
```

## spread operator - 여러가지 활용


* 배열 중간에 끼어넣기

```javascript
let pre = [100, 200,"hello", null];

let newData = [0, 1, 2, 3, ...pre , 4];

console.log(pre);
console.log(newData);
```

* 함수의 매개변수로 pre 전달

```javascript
function sum(a, b, c) {
  return a + b + c;
}

let pre = [100, 200, 300];

console.log(sum.apply(null, pre));
console.log(sum(...pre));

// 둘은 같은결과가 나온다. 

```

* spread operator를 사용한 배열은 immutable 하다 

---

## from 메서드로 진짜 배열 만들기 

* 자바스크립트는 함수를 정의할 때 매개변수를 선언하지 않아도 arguments같은 특별한 지역변수를 이용해서 매개변수를 받은 것 처럼 이용할 수 있따.
    * 권장되는 패턴은 아님.
```javascript

function addMark() {
  
  let newData = [];
  
  for (let i = 0; i < arguments.length; i++) {
    newData.push(arguments[i] + "!");
  }
  
  console.log(newData);
}

addMark(1, 2, 3, 4, 5);      

// 요런식으로도 만들 수 있다
function addMark() {
  
  let newArray = Array.from(arguments);
  
  let newData = arguments.map(function(value) {
    return value + "!";
  });

}
```





