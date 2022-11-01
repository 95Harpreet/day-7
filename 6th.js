var emp=[12,34,322,11]

console.log('elements are:--------')
emp.forEach(test)
function test(value,index)                //first parameter indicates value and second=index  and not compulsory to show both parameters
{
    console.log("emp["+index+"]="+value)
}