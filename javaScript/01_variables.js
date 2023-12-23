const accountId=4555
var accountEmail = "abc@gamil.com"
let accountPassword = "12345"
accountCity = "jaipur"
let accountState;
// account =2 // not allowed
// prefer not use var because of issue in block scope and functional scope
accountEmail = "asd@hc.com"
accountPassword="dfghj1234"
accountCity = "delhi"
console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity, accountState]);

