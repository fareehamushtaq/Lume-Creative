document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("active");
        });
    } else {
        console.error("Menu toggle or menu not found!");
    }
});

document.getElementById("registerBtn").addEventListener("click", function() {
    window.location.href = "registration.html"; 
});
