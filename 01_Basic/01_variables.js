const accountId = 144553
let accountEmail = "mayank@gmail.com"
var accountPassword = "12345"
accountCity = "Surat" // not proper way to declar a variable 
let accountState ;

// accountId =2 // not allowed beause used const 

accountEmail = "mandycool@gmail.com"
accountPassword = "1234567"
accountCity = "delhi"

console.log(accountId);

/* 
prefer not to use -> var becuse of the issue wth scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);
