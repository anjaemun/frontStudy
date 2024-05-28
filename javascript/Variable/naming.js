// 변수 이름은 카멜케이스로 작성 
let userName = "anjaemun"; // o
let user_name = "anjaemun"; // x

// 변수 이름은 _, $, 문자로만 시작 
let 12day = "월요일"; // x
let @day12 = "월요일"; // x 
let day12 = "월요일"; // o
let _day12 = "월요일"; // o
let $day12 = "월요일"; // o

// 상수나 축약어는 대문자와 스네이크케이스로 작성

const HTML = "Hyper Text Markup Language";
const MAX_LEVEL = "99";

// 예약어 사용 불가 
const var = 10; // x , var는 예약어(변수 타입)