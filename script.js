document.addEventListener('mousemove', function(e) {
    createSparkle(e.pageX, e.pageY);
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    document.querySelector('.sparkle-container').appendChild(sparkle);

    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';

    setTimeout(() => {
        sparkle.remove();
    }, 500);
}