function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Intersection Observer API를 사용하여 요소가 뷰포트에 들어오면 애니메이션 트리거
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const elements = document.querySelectorAll('.animate-text');
    elements.forEach((el) => observer.observe(el));
});
