import React from 'react';

const Array_revesions = () => {
    let num=[1,2,3,2]
    let name=["x","y","z"]
    let str="Lorem ipsum dolor sit amet."
    let  ages= [13,19,10,14,11]
    let flat=[1,[2,[3,4],5],6]
    let marks=[30,40]
    let element=0;
    function fun(arg){
     return arg;
    }
    let bindfun=fun.bind(null,ages)
    console.log(bindfun())
    console.log()
    for (let i = 0; i < num.length; i++) {
       element+= num[i];
        
    }
    console.log(num.reduce((total,curr)=>total+curr,0))
    console.log(name.map((item)=>item.length))
    console.log(Math.min(...num))
    console.log(num.reduce((total,curr)=>total+curr,0)/num.length)
    console.log(marks.filter((item)=>item>=50)?"you are passed":"fail")
    console.log(ages.map((item)=>item>=13&&item<=19?"you are teen ager":"you are not teen ager"))
    
    console.log(ages.push(5))
    console.log(ages.map((item)=>item.toLocaleString('en-US',{style:'currency',currency:'USD'})))
    console.log(ages.map((item)=>parseFloat(item).toFixed(2)))
    console.log(ages.toString())
    console.log(ages.slice(1,))
    console.log(ages.splice(0,3))// deleting ke liye use hota hai,jitna tak save karna hai utna range bata do
    console.log(ages.pop())
   console.log(ages.shift())
   console.log(ages.unshift(9))
   console.log(ages)
   console.log(flat.flat())
   console.log(flat.flatMap((item)=>item))
   console.log(ages.concat(flat,ages).flat())
   console.log(ages.reduceRight((total,curr)=>total+curr)) //ye reverse order me calculate karta hai
  console.log(ages.copyWithin(-1,0,-1))
  console.log(ages.fill([2,3,4,5,6]))
  console.log(Array.isArray(ages))
  console.log(Array.from(str))
  console.log(Math.max.apply(null,ages.flat()))
  console.log(String.apply())


  //////////////////////////// practice javascript
  

    return (
        <div>
            
        </div>
    );
};

export default Array_revesions;