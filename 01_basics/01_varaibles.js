// There are tree type of Variable in JavaScript :: const, let, var, automatically 


// Declaration and initialization of Variables:

const accountId = 1234              
// It is mandatory to initialize const variable at the time of declaration and it can't be updated.
               
let accountdEmail = "ashish473797@gmail.com"
// It is not mandatory to initialize let variable at the time of declaration but not redeclare(make safe).

var accountPassword = "12345678"
// It is not mandatory to initialize var variable at the time of declaration but it can be redeclare(which is not safe)  and is not used futher because of issue block scope and functional scope. that why not 'Prefer'.

accountCity = "Varanasi"            
// same as var. that why not Prefer.

console.table([accountId, accountdEmail, accountPassword, accountCity, accountState])