function createWaveCircle(event) {
    const element = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(element.clientWidth, element.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.pageX - element.offsetLeft - radius}px`;
    circle.style.top = `${event.pageY - element.offsetTop - radius}px`;
    circle.classList.add('wave-element__circle');

    const waveElement = element.querySelectorAll('.wave-element__circle')[0];

    if (waveElement) {
        waveElement.remove();
    }

    element.appendChild(circle);
}

document.querySelectorAll('.wave-element').forEach((el) => {
    el.addEventListener('pointerup', createWaveCircle);
});
