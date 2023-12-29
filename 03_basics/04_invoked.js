// immediately invoked  function expressions
// global scope ke polution se jo problem hoti hai jo bhi vaha variables wegra
// se problem hoti hai jo vaha decleare hota hai usase dikkat na ho uske liye invoked wala method use karte hai
(function chai() {
    //named iife bolte hai isse
console.log(`DB CONNECTED`);
})();
( (name)=> {
    console.log(`DB CONNECTED ${name}`);
 })("uppu");
 