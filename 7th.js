var emp=[]
//in this example we skip one index value
emp[0]=1
emp[2]=2
emp[3]=5
console.log('total elements are '+emp.length)
console.log('elements are:--------')
emp.forEach(test)
function test(value,index)                //first parameter indicates value and second=index  and it is not compulsory to show both parameters
{
    console.log("emp["+index+"]="+value)
}
/*elements are:--------
emp[0]=1
emp[2]=2
emp[3]=5*/