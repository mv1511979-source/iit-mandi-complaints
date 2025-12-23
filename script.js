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

// ... (keep your tab navigation code at the top) ...

const scriptURL = 'https://script.google.com/macros/s/AKfycbwhT5yAvX5EEpGL3hGZqX9dj3TqqatdZt5f72rUZvamzViJmYAZeRGWeWfBSdGyHQuV/exec';
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button');
    btn.innerText = "Sending...";
    btn.disabled = true;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors', 
        cache: 'no-cache',
        body: JSON.stringify(data) // Sending data as a JSON string
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
