"use strict";
//tsconfig.json 에서 "strict": true, exactOptionalPropertyTypes:true를 주석으로 하면 
//타입을 지정한 변수에 null 대입 가능
// let myName : string = null;
// let myName : number = undefined;
Object.defineProperty(exports, "__esModule", { value: true });
// let u : undefined = null;
let v = undefined;
// | 기호로 string과 null 합집합 
let union = null;
union = "hong";
//null 무언가 있는데 사용할 준비가 덜 된 상태
//null 타입은 null 값만 가질 수 있다
//런타임에서 typeof 연산자를 이용해 타입을 알아보면 object 타입
let n = null;
console.log(n);
console.log(typeof n);
//값을 할당하지 않은 변수는 undefined 값을 가진다
//무언가 아예 준비가 안된 상태
//object의 property가 없을 때도 undefined
//런타임에서 typeof 연산자를 이용해 타입을 알아보면 undefined 타입
let u = undefined;
console.log(u);
console.log(typeof u);
//# sourceMappingURL=null.js.map