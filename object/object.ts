//object 원시타입이 아닌 것을 나타내고 싶을 때 사용하는 타입
const person1 = {
  name : "hong",
  age : 20
}

const person2 = Object.create({name:"hong", age:20});


console.log(person1);
console.log(person2);



