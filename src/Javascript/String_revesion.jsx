import React from 'react';

const String_revesion = () => {
    let x="ozairkhan2580@@gmail.com"
    let sentence="The quick brown fox jumps over the lazy dog"
    let address="123 main street,city,country"
    let password="secretpassword123"
    let message="       hello world         "
    let file="document.pdf"
    console.log(x.split()) //isme ham john doe ko alag alag array banate hain "john " ,"doe"
    console.log(x.indexOf('@'))
    console.log(address.toUpperCase())

    console.log(address.replace("country",""))
    console.log(sentence.replace("fox","dog"))
    let emptypassword=password.replace(/[0-9]/g,"") //password me jo bhi number the use remive kar diya
    console.log(emptypassword)
    console.log(password)
    

    console.log(message.trim()) //extra space remove ke liye

    console.log(file.split(".").pop()) //file extention ko pata karne ke liye (dot ke baad jo bhi hai wo split method de deta hai)


    let fullname="john doe" // is string se first name aur last name likhna hai alag alag
        fullname=fullname.split(" ")
    console.log(fullname[0],fullname[1])

    let sentences="The quick brown fox jumps over the lazy dog" //find the "THE " ki frequency
    console.log(sentences.match(new RegExp("\\b"+"The"+"\\b","gi")|| []).length)
    
    console.log("find @ no accurences",(x.match(/@/g)||[]).length)
    console.log("reverse",x.split("").reverse().join(""))
    console.log("upper case",x.replace("gmail","GMAIL"))

    let paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quasi!."
    console.log(paragraph.split(".").length-1)

    let date="2022-12-31"
    const dateRegex=/^\d{4}-\d{2}-\d{2}/;
    console.log(dateRegex.test(date))

    console.log(paragraph.split(" ").includes("ipsum",1))
    console.log(paragraph.match(/o/g))
    console.log("searching ke liye hota hai kaha se kaha tak",paragraph.slice(1,10))
    console.log(paragraph.split(" ").splice(2,7,'a','b')) //"aur ye method add,delete ke liye hota hai",
    console.log(paragraph.split(" ").reverse().join(" ")===paragraph)//check palindrome
 console.log(x.match(/@/g).length)

 let phonenumber="123abc"
 console.log(phonenumber.charAt()>0)

    return (
        <div>
        
        </div>
    );
};

export default String_revesion;