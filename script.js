// document.getElementById("demo").innerHTML="Hi";
// document.write(4+4);
// window.alert(5+6);
// console.log("priya");

// let a = 4;
// let b = 2;
// let sum = a + b;
// let mul = a * b;
// let div = a / b;
// let sub = a - b;
// let expo = a ** b
// a++;
// b--;
// let inc = a;
// let dec = b;



// console.log(sum)
// console.log(mul)
// console.log(div)
// console.log(sub)
// console.log(expo)
// console.log(inc)
// console.log(dec)

const a = document.getElementsByTagName("p")[0]
a.title = "Joseph Vijay Chandrasekhar (born 22 June 1974) is an Indian actor, singer and politician. He works predominantly in Tamil cinema and has acted in over 65 films. He is one of the most commercially successful actors in Tamil cinema with multiple films amongst the highest grossing films of all time and is amongst the highest paid actors in India."
a.style.backgroundColor= "#9b6e5c"
// a.setAttribute(attibute,value)

const element=document.createElement("p");
const text1 = document.createTextNode("HI !!")
document.body.appendChild(element)
element.appendChild(text1)

function validateform() {
    let x= document.forms["myform"]["Username"].value;
    if(x==""){
        alert("Enter your Username!");
        return false;
    }


}
