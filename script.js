function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.bar');
const animateBars = () => {
  skillBars.forEach(bar => {
    if (bar.classList.contains('html-bar')) bar.style.width = '90%';
    if (bar.classList.contains('css-bar')) bar.style.width = '85%';
    if (bar.classList.contains('js-bar')) bar.style.width = '80%';
    if (bar.classList.contains('ui-bar')) bar.style.width = '70%';
  });
};
const skillSection = document.querySelector('#skills');
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) animateBars();
  });
}, { threshold: 0.4 });

skillObserver.observe(skillSection);
/* Particle Background Configuration */
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ffc8"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 4
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#00ffc8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
