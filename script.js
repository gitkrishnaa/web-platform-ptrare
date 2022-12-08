console.log('Hello!');
function h1(){
 let crt1=document.createElement("div");
let input1=document.createElement("input");
let head1=document.createElement("h1");
head1.innerText="heading1"
head1.style.display="none";
let input2=document.createElement("input");

let btn1=document.createElement("button");btn1.innerText="done";
btn1.addEventListener("click",()=>{
  if(input1.value==""){
    alert("fill the input")
  }
  else{
input1.style.display="none";
btn1.style.display="none";
head1.style.display="block";
head1.innerText=input1.value;
  }


})
head1.addEventListener("click",()=>{
  input1.style.display="block";
  btn1.style.display="block";
  head1.style.display="none";
  })


let body1=document.getElementById("pre1")
body1.appendChild(crt1)
crt1.appendChild(input1)
crt1.appendChild(btn1)
crt1.appendChild(head1)


}