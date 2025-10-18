//symbol은 new Symbol로 사용할 수 없다
//Symbol을 함수로 사용해 symbol 타입을 만들어 낼 수 있다.
//symbol은 원시타입의 값을 담아서 사용
//고유하고 수정 불가능한 값으로 만든다 
//주로 접근 제어하는 데 쓰는 경우가 많음
console.log(Symbol('fooo') === Symbol('fooo'));

let sym = Symbol();
let obj = {
  [sym]:"value"
};
// console.log(obj["sym"]);"sym"으로 찾을 수 없음
console.log(obj[sym]);













