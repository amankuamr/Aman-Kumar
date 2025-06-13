// Start Menu functionality
function toggleStartMenu() {
    const startMenu = document.getElementById('startMenu');
    startMenu.classList.toggle('show');
}

// Profile photo flip functionality
// Assumes the following IDs in HTML:
//   profileFlipContainer, profileFlipCard

document.addEventListener('DOMContentLoaded', function() {
    var flipContainer = document.getElementById('profileFlipContainer');
    var flipCard = document.getElementById('profileFlipCard');
    if (flipContainer && flipCard) {
        console.log('Attaching flip event to profile photo');
        flipContainer.style.cursor = 'pointer';
        flipContainer.addEventListener('click', function() {
            flipCard.classList.toggle('flipped');
            console.log('Profile photo flipped:', flipCard.classList.contains('flipped'));
        });
    } else {
        console.log('Flip container or card not found:', flipContainer, flipCard);
    }
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const startMenu = document.getElementById('startMenu');
    const startButton = document.querySelector('.start-button');
    if (!startMenu.contains(event.target) && !startButton.contains(event.target)) {
        startMenu.classList.remove('show');
    }
});