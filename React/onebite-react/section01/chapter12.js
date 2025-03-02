function funcA() {
	console.log("funcA");
}

let varA = funcA;
varA();

let varB = function() { // 함수표현식 호이스팅 X
	console.log("funcB");
};

// 2. 화살표 함수
let varC = (value) => {
	console.log(value);
	return value + 1
};

console.log(varC(10));