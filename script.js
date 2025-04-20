// Example of smooth scroll functionality for links
document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Sticky header
    window.addEventListener('scroll', () => {
      document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 50);
    });
  
    // Animate hero text
    const hero = document.querySelector('.hero-content');
    window.addEventListener('load', () => {
      hero.classList.add('fade-in');
    });
  
    // Button click ripple effect
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function (e) {
        const circle = document.createElement('span');
        const diameter = Math.max(this.clientWidth, this.clientHeight);
        const radius = diameter / 2;
  
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
        circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
        circle.classList.add('ripple');
  
        const ripple = this.querySelector('.ripple');
        if (ripple) ripple.remove();
        this.appendChild(circle);
      });
    });
  
    // Scroll-based fade in for sections
    const faders = document.querySelectorAll('.fade-scroll');
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
  
    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in');
        appearOnScroll.unobserve(entry.target);
      });
    }, appearOptions);
  
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  });  