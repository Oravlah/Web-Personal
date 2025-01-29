function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});



// Función para aplicar el efecto de animación a las letras del encabezado
function applyTextAnimation() {
    const headerText = document.querySelector('header .content h1');
    const text = headerText.innerText;
    headerText.innerHTML = ''; // Limpiar el contenido original
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.className = 'animated-text';
        headerText.appendChild(span);
    }
}

// Aplicar el efecto de animación al texto del encabezado
applyTextAnimation();
