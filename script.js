const envelopeWrapper = document.getElementById('envelopeWrapper');
const letterCard = document.getElementById('letterCard');
const closeBtn = document.getElementById('closeBtn');
const heartsBg = document.getElementById('heartsBg');

// Open envelope when clicked
envelopeWrapper.addEventListener('click', (e) => {
    if (e.target !== closeBtn) {
        envelopeWrapper.classList.add('open');
    }
});

// Close letter when close button is clicked
closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    envelopeWrapper.classList.remove('open');
});

// Floating hearts generator
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-float');
    heart.innerHTML = '❤️';
    
    // Random positions and speeds
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    
    heartsBg.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts continuously
setInterval(createHeart, 400);
