// إعداد particles.js
particlesJS("particles-js", {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: { value: 0.5, random: false, anim: { enable: false } },
        size: { value: 4, random: true, anim: { enable: false } },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// تغيير لون الخطوط عند الضغط على الزر
document.getElementById("changeColor").addEventListener("click", function() {
    const selectedColor = document.getElementById("colorPicker").value;

    // تحديث إعدادات particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 60, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: { value: 0.5, random: false, anim: { enable: false } },
            size: { value: 4, random: true, anim: { enable: false } },
            line_linked: { enable: true, distance: 150, color: selectedColor, opacity: 0.4, width: 1 }, // استخدام اللون المحدد
            move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false }, resize: true },
            modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
        },
        retina_detect: true
    });
});
