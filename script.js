document.addEventListener('DOMContentLoaded', function() {

    // --- Menu Hamburger para Mobile ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- Simulação de Envio de Formulário ---
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Impede o envio real do formulário

        // Simula um envio
        formStatus.textContent = "Enviando...";
        formStatus.style.color = "#333";

        setTimeout(() => {
            formStatus.textContent = "Mensagem enviada com sucesso! Obrigado!";
            formStatus.style.color = "var(--primary-green)";
            contactForm.reset(); // Limpa o formulário
        }, 1500);
    });

    // --- Animação ao Rolar (Scroll) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    // Observa todos os elementos com a classe .animate-on-scroll
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

});