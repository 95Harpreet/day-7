var emp=[]
//in this example we skip one index value
emp[0]=1
emp[2]=2
emp[3]=5
var i
//console.log('total elements are '+emp.length)
console.log('elements are:--------')
for(i=0;i<emp.length;i++)
{
    if(emp[i]==null){
        console.log('oops no value')
    }
    else{
    console.log(emp[i])
    }
}