// script.js

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active'); // تبديل كلاس active على زر الهامبرغر
});

document.addEventListener("DOMContentLoaded", function () {
    let navbar = document.querySelector(".navbar");
    let header = document.querySelector(".hero");

    if (!navbar || !header) {
        console.error("⚠️ لم يتم العثور على .navbar أو .hero في HTML!");
        return;
    }

    let observer = new IntersectionObserver(
        function (entries) {
            let entry = entries[0];
            if (!entry.isIntersecting) {
                navbar.classList.add("scrolled");
                console.log("✅ تمت إضافة كلاس 'scrolled'");
            } else {
                navbar.classList.remove("scrolled");
                console.log("❌ تم إزالة كلاس 'scrolled'");
            }
        },
        { threshold: 0.1 } // عندما يظهر 10% من الهيدر يتم التفاعل
    );

    observer.observe(header);
});

const imagePaths = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];

let currentImageIndex = 0;
const heroImage = document.getElementById('hero-image');

setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    heroImage.src = imagePaths[currentImageIndex];
}, 3000);