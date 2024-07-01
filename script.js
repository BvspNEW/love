function playCatSound() {
    const catSound = document.getElementById('catSound');
    catSound.play();

    // Show cat image for 5 seconds
    const catImage = document.createElement('img');
    catImage.src = 'cat_image.png';
    catImage.alt = 'Gemess Cat';
    catImage.style.width = '200px';
    catImage.style.position = 'absolute';
    catImage.style.top = '50%';
    catImage.style.left = '50%';
    catImage.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(catImage);

    setTimeout(() => {
        catImage.remove();
    }, 5000);
}

function toggleMenu() {
    const menuContent = document.getElementById('menu-content');
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}

function changeBackground(background) {
    document.body.style.background = background;
    document.body.style.backgroundSize = '400% 400%';
    document.body.style.animation = 'gradientBackground 15s ease infinite';
    toggleMenu();
}

function startAnimation() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 50; i++) {
        const love = document.createElement('div');
        love.className = 'love';
        love.textContent = '❤️';
        love.style.left = Math.random() * window.innerWidth + 'px';
        love.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(love);
    }
}

function openSocial(url) {
    window.open(url, '_blank');
}
