// 함수선언

function getArea(width, height) {
	function another() { // 중첩함수
		console.log("another");
	}

	another();
	let area = width * height;

	return area;
}

// 호이스팅
// -> 끌어올리다 라는 뜻

let area1 = getArea(10,20);
console.log(area1);
getArea(30, 20);
getArea(120, 200);

