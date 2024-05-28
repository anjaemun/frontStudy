let arr1 = [10];
console.log(arr1);
// 값을 여러개 할당할 경우 , 로 구분 
let arr2 = [10, 20];
console.log(arr2);

// 모든 자료형 사용 가능 
let arr3 = [10, 'abc', true, null, undefined, function(){}, {}];
console.log(arr3);
// 특정값만 참조하고 싶을 경우 인덱스를 통해 사용 
console.log("1번 인덱스 값 : " , arr3[1]);