let a1=document.querySelector("#a1");
let a2=document.querySelector("#a2");
let a3=document.querySelector("#a3");
let m2=document.querySelector("#m2");
let m1=document.querySelector("#m1");
let m3=document.querySelector("#m3");
a1.addEventListener("click",()=>
{
   m2.style.display="none";
   m1.style.display="flex";
   m3.style.display="none";
   a1.classList.add("active");
   a2.classList.remove("active");
   a3.classList.remove("active");
   
})
a2.addEventListener("click",()=>
{
   m1.style.display="none";
   m2.style.display="flex";
   m3.style.display="none";
   a2.classList.add("active");
   a1.classList.remove("active");
   a3.classList.remove("active");
})
a3.addEventListener("click",()=>
{
   m2.style.display="none";
   m3.style.display="flex";
   m1.style.display="none";
   a3.classList.add("active");
   a2.classList.remove("active");
   a1.classList.remove("active");
})
document.addEventListener("DOMContentLoaded",()=>
{
    m3.style.display="none";
   m2.style.display="none";
   m1.style.display="flex";
   a1.classList.add("active");
   a2.classList.remove("active");
   a3.classList.remove("active");
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbyEIMkILa6qQwM3YMURNwFtWDQ5dhPKIGU3Gt4Oxab4EpxDzvernkiiELL-VEbmmcwn/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Change button text to show it's working
  const btn = form.querySelector('button');
  btn.innerText = "Sending...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Success! Your complaint is registered.");
        btn.innerText = "Submit";
        form.reset();
    })
    .catch(error => {
        alert("Error! Data not sent.");
        btn.innerText = "Submit";
    });
});