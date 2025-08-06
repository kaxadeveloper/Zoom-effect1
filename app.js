const container = document.getElementById('container');
const img = container.querySelector('img');

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
});

container.addEventListener('mouseleave', () => {
    img.style.transformOrigin = 'center center';
    img.style.transform = "scale(1)";
});
