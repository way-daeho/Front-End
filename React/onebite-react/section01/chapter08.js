// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1?? var2;
let var5 = var1 ?? var3;
console.log(var5);


// typeif 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자