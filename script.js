const images = [
    'images/phone1.jpg',
    'images/phone2.jpg',
    'images/phone3.jpg',
    'images/phone4.jpg'
];
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Display the first image initially
    mainImage.src = images[currentIndex];
    thumbnails[currentIndex].classList.add('active');

    // Function to update the displayed image
    function updateImage(index) {
        mainImage.src = images[index];
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        currentIndex = index;
    }

    // Show selected image on thumbnail click
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => updateImage(index));
    });

    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateImage(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateImage(newIndex);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
});
