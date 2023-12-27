//function

// function myname() {
//     console.log("u");
//     console.log("p");
// }

// myname()

// function addToNumbers(number1,number2) {
//     console.log(number1+number2)
// }
// addToNumbers(3,4)
// function addToNumbers(number1,number2) {
   // console.log(number1+number2)
//    let result = number1+number2;
//    return result;
// return number1+number2
// }

// const result = addToNumbers(5 , 6);
// console.log(result);

// function loginUserMessage(username) {
    // if(username === undefined){
    //     console.log("please enter a user name");
    //     return;
    // }
//     if(!username){
//         console.log("please enter a user name");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage());

// function loginUserMessage(username = "sam") {
    // if(username === undefined){
    //     console.log("please enter a user name");
    //     return;
    // }
//     if(!username){
//         console.log("please enter a user name");
//         return;
//     }
//     return `${username} just logged in`;
// }
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));