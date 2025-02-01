const accountId = "123456";
let accountemail = "ahsan@gmail.com";
var accountpassword = "223344";
accountCity = "lahore"
let accountState;

// accountId = 2; // not allowed
accountemail = "ah@gmail.com"
accountpassword ="44556777"
accountCity ="islamabad"
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountemail, accountpassword, accountCity,accountState ])
