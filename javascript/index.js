const boxes = document.querySelectorAll('.box-language');

boxes.forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.classList.add('magnetic');
    });
    box.addEventListener('mouseleave', () => {
        box.classList.remove('magnetic');
    });
});
