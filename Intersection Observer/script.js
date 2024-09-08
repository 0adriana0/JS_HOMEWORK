document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('img[data-src]');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src; // Зміна атрибута src на data-src
                observer.unobserve(img); // Припинення спостереження за img
            }
        });
    });

    // Спостереження за кожним зображенням
    images.forEach(img => {
        observer.observe(img);
    });
     
});