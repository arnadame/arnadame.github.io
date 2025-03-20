particlesJS('particles-js', {
    "particles": {
        "number": { "value": 150, "density": { "enable": true, "value_area": 1000 } },
        "color": { "value": ["#ffffff", "#ffdd44", "#ff66b2", "#44ddff", "#99ff66"] },        "shape": { "type": "circle", "stroke": { "width": 0, "color": "#fff" } },
        "opacity": { "value": 0.9, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.3, "sync": false } },
        "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 3, "size_min": 0.5, "sync": false } },
        "line_linked": { "enable": false },
        "move": { "enable": true, "speed": 0.5, "direction": "none", "random": true, "out_mode": "out" }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "bubble": { "distance": 100, "size": 4, "duration": 2, "opacity": 1 }, "push": { "particles_nb": 4 } }
    },
    "retina_detect": true
});