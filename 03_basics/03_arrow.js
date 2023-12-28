const user = {
    userName: "upendra",
    price: 999,
    welcomeMessage : function() {
       console.log(` ${this.userName} , welcome to my website`);
       console.log(this);
    }

}
// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
//console.log(this);

// function chai() {
//     let username = "uppu";
//     console.log(this.username);
// }
// chai()

// const chai = ()=> {
//     let username = "uppu";
//     console.log(this.username);
// }
// chai()
// const addtwo = (num1,num2)=> {
//     return num1 +num2;
// }
//agar app arrow function me return nhi use karna chahte hai tb use direct () isme likh do 
//const addtwo = (num1,num2)=>  (num1 +num2);
// console.log(addtwo (3,4));
// jab app object me likhte hai tb use ({}) aise likhna padta hai

const addtwo = (num1,num2)=>  ({username : "uppu"});
console.log(addtwo())