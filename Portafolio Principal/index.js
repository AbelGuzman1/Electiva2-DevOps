document.addEventListener('DOMContentLoaded', function() {
    // 1. Configuración (ajusta la velocidad aquí, en milisegundos)
    const scrollSpeed = 800; // Cambia este valor para modificar la velocidad

    // 2. Seleccionar elementos
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.querySelector('.menu-toggle');

    // 3. Desplazamiento suave al hacer clic
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }

            // Cerrar menú en móvil (si aplica)
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-menu').classList.remove('active');
            }
        });
    });

    // 4. Resaltar sección activa al hacer scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100; // Ajuste para activar antes

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const id = section.getAttribute('id');
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // 5. Menú toggle para móvil (opcional, si ya lo tienes)
    menuToggle.addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('active');
    });
});

/*Velocidad del texto principal */
document.addEventListener('DOMContentLoaded', function() {
    const text = "¡Hola! Soy Abel Guzmán";
    const typingElement = document.getElementById('typing-effect');
    let i = 0;
    const speed = 150; // Velocidad en milisegundos (ajústala)

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // Elimina el cursor al finalizar
            typingElement.style.borderRight = 'none';
        }
    }

    // Inicia el efecto
    typeWriter();
});