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
// --- Submission Logic ---
const scriptURL = 'https://script.google.com/macros/s/AKfycbzMW_s7JmVw5DgJo9pX3NOULa-Bsntl55Y59JPyrEbTK2kgyyQUcEetV45DdyW_dMAS/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const btn = form.querySelector('button');
    btn.innerText = "Sending...";
    btn.disabled = true;

    // 1. Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // 2. Format date as DD/MM/YYYY
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); 
    const yyyy = now.getFullYear();
    data.date = `${dd}/${mm}/${yyyy}`; 

    // 3. Send to Google Sheets
    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache',
        body: JSON.stringify(data) 
    })
    .then(() => {
        alert("Success! Your complaint has been recorded.");
        btn.innerText = "Submit";
        btn.disabled = false;
        form.reset();
        window.location.reload(); 
    })
    .catch(error => {
        console.error('Error!', error.message);
        btn.innerText = "Submit";
        btn.disabled = false;
    });
});

