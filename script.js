const odd = [ 1, 3, 5, 7, 9 ];
const even = [];
for (let index = 0; index < odd.length; index++) {
    const element = odd[index];
    even.push(element + 1);
}
console.log(even)
const even2 = odd.map(value => value +1);
console.log(even2);
const randomNumber = [33, 50, 79, 78, 90, 101, 30 ];
const divisibleNumber = randomNumber.filter(value => value % 10 === 0);
console.log(typeof divisibleNumber);
const divisibleNumber2 = randomNumber.find(value => value % 10 === 0)
console.log( typeof divisibleNumber2);
const randomArray = [ 1, 9, 17, 22 ];
let total = 0;
for (let index = 0; index < randomArray.length; index++) {
    const element = randomArray[index];
    total += element;
}
console.log( total)
console.log((randomArray.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
},0)));
const people = [
    {name: 'Meena', age: 20},
    {name: 'Runa', age: 15},
    {name: 'Suchorita', age: 22}
];
let totalAge = 0;
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    totalAge += element.age;
}
console.log(totalAge)
console.log((people.map(value => value.age)).reduce((prev, curr)=>{
    return prev + curr;
},0))
const student = {
    name: 'Freedie',
    age: 26,
}
console.log(student.age);
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
}
console.log(data.location[0].country)
const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
console.log(user.email);
console.log(user.address);
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);


// Interview Questions
// 1. What’s the difference between map, foreach, filter?
/**
 * map create New Array. Do Not alter original Array. Execute Function
 * filter create New Array. Do Not alter original Array. [Execute Function + Condition + ture]
 * same code for every element. Do Not alter Original Array. Returns undefined
 * /
// 2. What’s the difference between filter and find?
/**
 * Find returns first expressions or statement or logic matches Element
 * filter create New Array. Do Not alter original Array. [Execute Function + Condition + ture]
 * /
// 3. What is the difference between for..of and for..in?
// 4. How do you empty an array?
//    1) Assigning it to a new empty array
//    2) Setting its length to zero
//    3) Using splice() method
//    4) Using pop() method
// 5. Difference between class and object.
// 6. What is a Prototype chain? Or how does inheritance work in JavaScript?
// 7. What does destructing do in es6?
// 8. Is optional chaining is same as ternary operator?
// 9. What do you mean by dot notation and bracket notation? When should you use dot notation or bracket notation*/