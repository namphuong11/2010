// Get elements
const image = document.getElementById('clickableImage');
const popup = document.getElementById('popup');
const close = document.querySelector('.close');

// Show popup when image is clicked
image.addEventListener('click', function() {
    popup.style.display = 'flex';
});

// Close popup when 'x' is clicked
close.addEventListener('click', function() {
    popup.style.display = 'none';
});

// Close popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
});
