//Nav bar
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}


// เพิ่มแอนิเมชันให้ข้อความใน Hero Section
document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.getElementById("hero-title");
    const heroSubtitle = document.getElementById("hero-subtitle");

 ซ่อนข้อความ
    heroTitle.style.opacity = 0;
    heroTitle.style.transform = "translateY(-20px)";
    heroSubtitle.style.opacity = 0;
    heroSubtitle.style.transform = "translateY(20px)";

    setTimeout(() => {
        heroTitle.style.transition = "opacity 1s, transform 1s";
        heroTitle.style.opacity = 1;
        heroTitle.style.transform = "translateY(0)";
    }, 500);

    setTimeout(() => {
        heroSubtitle.style.transition = "opacity 1s, transform 1s";
        heroSubtitle.style.opacity = 1;
        heroSubtitle.style.transform = "translateY(0)";
    }, 1000);
});

//animation
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

// ฟังก์ชันที่ใช้ Intersection Observer
document.addEventListener("DOMContentLoaded", () => {
    const contentItems = document.querySelectorAll('.content-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // 
            } else {
                entry.target.classList.remove('show'); //
            }
        });
    }, {
        threshold: 0.2 // 
    });

    contentItems.forEach(item => observer.observe(item));
});

