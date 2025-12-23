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
const scriptURL='https://script.google.com/macros/s/AKfycbwkqVr7pWdEloWfrLQbm3hGDRMMtPxo9lwHW9n8psYYkvAeCNTflR2JNVoSFy8vFZ7I/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const btn = form.querySelector('button');
  btn.innerText = "Sending...";
  btn.disabled = true;

  // Get the file from the input
  const fileInput = document.getElementById('imageFile'); 
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function() {
      // Convert image to a long string (Base64)
      const base64String = reader.result.split(',')[1];
      sendData(base64String, file.name);
    };
    reader.readAsDataURL(file);
  } else {
    sendData("", ""); // No image selected
  }
});

function sendData(base64, filename) {
  const btn = form.querySelector('button');
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  // ✅ ONLY DATE (YYYY-MM-DD)
  const today = new Date();
  data.date = today.toISOString().split('T')[0];

  data.image = base64;
  data.filename = filename;

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
    console.error('Error:', error);
    btn.innerText = "Submit";
    btn.disabled = false;
  });
}
