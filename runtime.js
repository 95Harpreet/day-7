var chd=require('readline-sync')
var emp=[]
//in this example we skip one index value

var i,n
//console.log('total elements are '+emp.length)
console.log(' decide array size ')
n=chd.questionInt()
console.log('now array elements are')
    for(i=0;i<n;i++)
    {
        emp[i]=chd.questionInt()
    }
    console.log('elements are:--------')
for(i=0;i<emp.length;i++)
{
    console.log(emp[i])
}