//never 타입은 모든 타입의 subtype이며 모든 타입에 할당 가능
//하지만 never에는 어떤 것도 할당 불가
//any 조차도 never에게 하당 불가
//잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 한다 
function error(message : string) : never {
  throw new Error(message)
}

function fail(){
  return error('failed');
}

function infiniteLoop(): never{
  while(true){

  }
}

// let a : string = "hello";
// if(typeof a !=='string'){
//   let b : never = a;
// }

declare let a : string | number;

if(typeof a !=='string'){
  a;//number 타입
}

type Indexable<T> = T extends string ? T & { [index : string] : any } : never;
type ObjectIndexable = Indexable <{}>;
// const b : Indexable<{}> = '';