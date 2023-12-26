const name = "Raj"
const age = 30

//console.log(name + age + " value");
// string interpolation use in the modern javascript for concatination
//console.log(`hello my name is ${name} and my age ${age}`);

const gameName = new String(`blogger`)
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4);
console.log(newString)
const anotherString = gameName.slice(-7,4);
console.log(anotherString)
const newStringone = "  hj   "
console.log(newStringone)
console.log(newStringone.trim());
const url="htttps//ushckjsha@20sakjfk"
console.log(url.replace('@20' , '-'))
console.log(url.includes("ush"));