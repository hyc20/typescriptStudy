//어떤 타입이어도 상관없는 타입, 쓰지 않는 것이 핵심
//컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문
//컴파일 옵션중에 any 써야하는데 쓰지 않으면 오류를 발생시키는 옵션 noImplicitAny
// function returnAny(message : any): any{
//   console.log(message);
// }

//const any1 = returnAny('아무거나');

// any1.toString();

let looselyTyped : any = {};
// const d = looselyTyped.a.b.c.d;

function leakingAny(obj : any) {
  // const a = obj.num;
  const a :number = obj.num;//any 전파를 막아준다
  const b = a + 1;
  return b;
}

const c = leakingAny({num:0});
//c.idexOf("0"); any 전파가 막혀서 number 타입이 되었기 때문에 number에 없는 indexOf를 쓸 수 없다

console.log(typeof c);