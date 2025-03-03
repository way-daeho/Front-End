// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴(대부분 사용)

let person = {
	name : "이대호",
	age : 26,
	hobby : "Programming",
	job : "AFOfficer",
	extra: {},
	"like lion 10th":true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
let age = person["age"];
console.log(name);
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티 추가법
person.callsign = "India";

console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "Officer";

console.log(person);

// 3-4. 프로퍼티 삭제하는 방법
delete person.job;
delete person["callsign"];

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result = "name" in person;
console.log(result);
let result2 = "cat" in person
console.log(result2);