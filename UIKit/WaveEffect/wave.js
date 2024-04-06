/**
 * Wave эффект как в материал у гугла, есть косяки
 *
 * @param {DOMElement} element DOMElement
 * @param {Event} event
 */
function createWaveCircle(element, event) {
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    let circle = element.querySelector('.wave-element__circle');
    if (!circle) {
        circle = document.createElement('span');
        circle.classList.add('wave-element__circle');
        element.appendChild(circle);
    }

    circle.style.display = 'none';
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - element.offsetLeft - radius}px`;
    circle.style.top = `${event.pageY - element.offsetTop - radius}px`;
    circle.style.display = 'block';
}

document.addEventListener('pointerup', (event) => {
    const wave = event.target.closest('.wave-element');
    if (wave) {
        createWaveCircle(wave, event);
    }
});

