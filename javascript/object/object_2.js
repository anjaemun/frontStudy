// 키 이름을 문자열로 해도 무관 
let student1 = {
    korean: 90, // 국어
    "english": 70, // 영어
    math: 80, // 수학
    science: 60 // 과학
};

// 각각의 값 사용할 경우 []안에 키값 문자열로 표현, . 다음에 키값 작성
console.log(student1["korean"]);
console.log(student1["english"]);
console.log(student1.math);
console.log(student1.science);