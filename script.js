// Tab Navigation Logic
let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let m1 = document.querySelector("#m1");
let m2 = document.querySelector("#m2");
let m3 = document.querySelector("#m3");

function showSection(section, activeLink) {
    [m1, m2, m3].forEach(m => m.style.display = "none");
    [a1, a2, a3].forEach(a => a.classList.remove("active"));
    section.style.display = "flex";
    activeLink.classList.add("active");
}

a1.addEventListener("click", () => showSection(m1, a1));
a2.addEventListener("click", () => showSection(m2, a2));
a3.addEventListener("click", () => showSection(m3, a3));

document.addEventListener("DOMContentLoaded", () => showSection(m1, a1));

// Form Submission Logic
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXyU40y6N5WeH0_3_d6fl5XW5shj2cKzCCKlBDlg27X2n4OfZyHGXjlouiZyq0XQut/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const btn = form.querySelector('button');
    btn.innerText = "Sending...";
    btn.disabled = true;

    // Send only text data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', // Critical for stopping the button freeze
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
        alert("Error submitting form.");
        btn.innerText = "Submit";
        btn.disabled = false;
    });
});
