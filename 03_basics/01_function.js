// Function:

function myFunction(name = "User") // name is the variable as a parameter and it contain User by default.
{
    console.log(`Hello, ${name}`)
    return true;
}

myFunction
// It is Referance of the function.

myFunction("Ashish")
// It is function calling with Argument.



// Example:

function addTwo(num1 = 0, num2 = 0)
{
    if(typeof num1 === Number && typeof num2 === Number)
    {
        return num1 + num2
    }
    else if(!num1 || !num2)
    {
        console.log(`Please Enter Number!`)
        return
    }
    return 0;
}

console.log(addTwo())



// Use Case with multiple arguments

function calCartPrice(...price)  // By using rest operator(...) we can combine data into array.
{
    return price
}

console.log('\n',calCartPrice(100, 1000, 302, 500))


function calPrice(val1, val2, ...price)  // By using rest operator(...) we can combine data into array.
{
    console.log('\n',val1, val2)
    return price
}

console.log('\n',calPrice(100, 1000, 302, 500, 10, 3000), '\n')



// Use cases with Objects:

const productUser = {
    id: "123",
    name: "Ashish",
    totalItem: 12,
    email: "ashish473797@gmail.com"
}

function profile(anyObj){
    console.log(`Name: ${anyObj.name}`)
    console.log(`Total Item Ordered: ${anyObj.totalItem}`)
}

profile(productUser)



// use Cases with Array

const myArr  = [1, 2, 3, 4, 5]

function showThird(arr){
    return arr[2];
}

console.log(showThird(myArr))