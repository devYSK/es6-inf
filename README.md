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


---
## 실습 1- 특정 문자열이 포함된 배열 만들어 반환하기

#### 문제

![](/images/2021-08-05-16-31-29.png)


```javascript

let list = document.querySelectorAll("li");

let listArray = Array.from(list); // li 노드로 구성된 배열 


let eArray = listArray.filter(function(v) {
    return v.innerText.includes("e");
});

console.log(eArray);

```

---

## Destructuring Array

## `Destructuring` : 객체나 배열을 변수로 '분해'할 수 있게 해주는 특별한 문법
    
* 참조 : https://poiemaweb.com/es6-destructuring

```javascript
//Destructuring
let data = ["crong", "honux", "jk", "jinny"];

let [jisu,,jung] = data;

console.log(jisu, jung); // crong, jk 출력
```

## Destructuring Object

```javascript

let obj = {
  name : "crong",
  address : "Korea",
  age : 10
}


// object 내의 변수명이랑 같아야 한다
let {name, age} = obj;
console.log(name, age); // crong, 10 출력


// 이름 변경도 가능하다 
let {name:myName, age:myAge} = obj;
console.log(myName, myAge); // crong, 10 출력
```

---

## Destructuring 활용 - JSON 파싱

* let [,`원하는 값`] = JSON 변수; 이런식으로 뽑아서 쓸 수 있다.
    
![](/images/2021-08-05-17-19-51.png)

* {title, imgurl} = mbc;
    * 이런식으로 또 내부 변수를 뽑을 수 있다.

#### `이렇게 개선 가능`
* 한번에 뽑는 방법

```javascript

let [{title, imgurl}, ] = news;
console.log(title, imgurl);

// 첫번째 인덱스에 넣고 뽑는 경우, sbs 관련 정보가 나오고


let [, {title, imgurl}] = news;
console.log(title, imgurl);

// 두번째 인덱스에 넣고 뽑는 경우 mbc 관련 정보가 나온다.

// 해당 인덱스에 맞춰 관련 정보가 나오는 것 
```

---

## Destructuring 활용 - Event 객체 전달


```javascript

// mbc 관련 newlist를 뽑음. 
function getNewsList([, {newslist}]) {
  console.log(newslist);
}

getNewsList(news); // news JSON 전달 

// sbs 관련 newlist를 받음, 
function getNewsList2([{newslist}, ]) {
  console.log(newslist);
}

getNewsList2(news);

```

---

## Set으로 유니크한 배열 만들기

* Set 자료구조 
    * 중복없이 유일한 값을 저장하려고 할 때.
    * 이미 존재하는지 체크할 때 유용.

* 선언 : let mySet = new Set();
    * 보통 출력할 때 forEach 사용
        * set.forEach(fucntion(v) {
            console.log(v);
         });
    
    * 요소 추가 : set.add(obj);

    * set 내에 객체를 같고있는지 확인할때 쓰는 함수 `has`
        * set.has(obj); // true or false
    
    * set 에서 요소 삭제
        * set.delete(obj);

    

## WeakSet으로 효과적으로 객체타입 저장하기

* 참조를 가지고 있는 객체만 저장이 가능한 자료구조 

* 객체 형태를 중복없이 저장하려고 할 때 유용하다. 

* null, primitive type 등 참조가 없는 값은 저장이 안되고 오류가 뜬다. 

* function() 도 저장 가능 (참조를 가진 객체니까)

* 선언 : let ws = new WeakSet();


---

## Map & WeakMap 추가정보를 담은 객체 저장하기. 

* Array를 조금 더 개선한 자료구조 -> set, weakset
* Object 를 조금 더 개선한 자료구조 -> map, weakmap

* map은 key/value 구조 
    * map 내에 객체 저장 : map.set(k, v);

    * map 내에서 객체 꺼내기 : map.get(key);


## WeakMap 클래스 인스턴스 변수 보호하기 

```javascript


const wm = new WeakMap();

function Area(height, width) {
  wm.set(this, {height, width}); // 변수 보호 
}


Area.prototype.getArea = function() {
  const {height, width} = wm.get(this); // destructuring
 
  return this.geight * this.width;
}

let myarea = new Area(10, 20);

console.log(myarea.getArea());

console.log(myarea.height); // undefined. 접근 불가 


// object를 사용해서 보호하기

const obj = {};

function Area(height, width) {  
  obj.height = height;
  obj.width = width;
}

Area.prototype.getArea = function() { 
  return this.geight * this.width;
}

let myarea = new Area(10, 20);
console.log(myarea.getArea());

```

--- 

## 실습 2 로또번호 생성기
![](/images/2021-08-05-18-39-13.png)

* 로또번호 코드 

```javascript

const SETTING = {
  name : "LUCKY LOTTO!",
  count : 6,
  maxNumber : 45
}

const lottos = new Set();
const {count, maxNumber} = SETTING; // 이러면 메모리 손해 아닌가? 

function getRandomNumber(maxNumber) {
  
  while (lottos.size < count) {
    let randomNum = Math.ceil(Math.random() * 100);
    
    if (randomNum <= maxNumber) {
      lottos.add(randomNum);
    }     
  }

  return Array.from(lottos);
}


console.log(getRandomNumber(maxNumber));

/* 출력용
lottos.forEach(function(v) {
  console.log(v);
})
*/

```



