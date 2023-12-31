
/* 
promise ka matlb ye hota hai jab app koi kam kar rahe hai 
tb use vo turant nhi karta hai vo satiution ke hisab se 
ye dekhta hai ki failed (reject) hoga ya pass (confirm) ho jayega

promise future me jake complete hota hai 

A promise is in one of these states:
   . pending : intial state , neither fulfiled nor rejected.
   . fulfilled : meaning that the operation was copleted successfully.
   .  rejected : meaning that the operation failed.

   fetch('koi url aa jayega').then("iska matlb hai ki koi response aayega to vo then me aayega")
   .catch("agar koi error aayega to catch me aayega ")
   .finally("isme sb kuch aa jata hai matlb ki finally to run hota hi hota hai")
promise me q aur bluebird library hota hai


*/ 

const promiseOne = new Promise(function(resolve,reject){
   // do an async task
   // DB calls , cryptography, network
   setTimeout(function(){
     console.log('Async task is complete');
     resolve()
   },1000)
})

promiseOne.then(function(){
   console.log('promise is consumed');
})

new Promise(function(resolve,reject){
   setTimeout(function(){
     console.log('Async task 2 is complete');
     resolve()
   },1000)
}).then(function(){
   console.log('promise is consumed');
})

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
     //console.log('Async task is complete');
     resolve({username:"chai" , email: "chai@gmail.com"})
   },1000)
})

promiseThree.then(function(user){
   console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
   setTimeout(function(){
     //console.log('Async task is complete');
     let error = true
     if(!error){
     resolve({username:"chai" , email: "chai@gmail.com" , password: "123"})
     }else{
      reject('ERROR : SOMETHING WRONG')
     }
   },1000)
})
promiseFour
.then((user)=>{
   console.log(user);
   return user.username
})
.then((username)=>{
console.log(username);
})
.catch((error)=>{
   console.log(error);
})
.finally(()=>{
   console.log("the promise is either resolved or rejected");
})
//console.log(username);

const promiseFive = new Promise(function(resolve,reject){
   setTimeout(function(){
     //console.log('Async task is complete');
     let error = true
     if(!error){
     resolve({username:"javascript" , email: "chai@gmail.com" , password: "123"})
     }else{
      reject('ERROR : SOMETHING WRONG LIKE JS')
     }
   },1000)
});

async function consumedPromiseFive(){
   // const response = await promiseFive
   // console.log(response);
   try{
      const response = await promiseFive
   console.log(response);
   }
   catch(error){
console.log(error);
   }
}
consumedPromiseFive()
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error); 
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.




