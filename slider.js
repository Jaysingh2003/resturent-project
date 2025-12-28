const track = document.querySelector('.slide-track');
let position = 0;

function slide() {
    position -= 1;
    if (position <= -50) position = 0;
    track.style.transform = `translateX(${position}%)`;
    requestAnimationFrame(slide);
}

slide();