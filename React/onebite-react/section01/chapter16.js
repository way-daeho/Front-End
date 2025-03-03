// 1. 상수 객체
const animal = {
	type: "고양이",
	name: "siyeon",
	color: "DDG Blue",
};

animal.age = 26; //추가
animal.name = "sy";
delete animal.color; // 삭제

console.log(animal);

// 2. 매서드

const person = {
	name: "이대호",
	// 매서드 선언
	sayHi() {
		console.log("하이!");
	},
};

person.sayHi();
person["sayHi"]();