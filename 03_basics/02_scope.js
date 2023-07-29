// Scope Example:

let gobl = "global"         // Global Scope.

function parent(){          // Block Scope.
    let prnt = "parent"
    function child(){       // Sub-Block Scope.
        let chld = "child"
        console.log(chld)
        console.log(prnt)
        console.log(gobl)
    }
    // console.log(chld)    // Not Allowed.
    console.log(prnt)
    console.log(gobl)

    child()
    // parent()             // Allowed but function calling it-self i.e recursion occur without base case.
}

// console.log(chld)        // Not Allowed.
// console.log(prnt)        // Not Allowed.
console.log(gobl)

// child()                  // Not Allowed.   
parent()



// Function Defination vs Function Expression:

console.log(funOne())       // It is possible to call function above the function Defination.

function funOne(){
    return "Function Defination."
}


//console.log(funTwo())     // It is not possible to call function above the function Expression.

let funExp = function funTwo(){
    return "Function Expression."
}