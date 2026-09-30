const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // stop watching, animate once
    }
    else{
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
