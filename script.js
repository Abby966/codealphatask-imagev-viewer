const mainImage = document.getElementById('main-image'); 
const thumbnailContainer = document.getElementById('thumbnail-container');
const categoryButtons = document.querySelectorAll('.category-btn');

// Image data by category
const images = {
    landscapes: [
        'images/landscapes/landscape1.jpeg', 
        'images/landscapes/landscape2.jpeg', 
        'images/landscapes/landscape3.jpeg', 
        'images/landscapes/landscape4.jpeg', 
        'images/landscapes/landscape5.jpeg'
    ],
    flowers: [
        'images/flowers/flower1.jpeg', 
        'images/flowers/flower2.jpeg', 
        'images/flowers/flower3.jpeg', 
        'images/flowers/flower4.jpeg', 
        'images/flowers/flower5.jpeg'
    ],
    girls: [
        'images/girls/girl1.jpeg', 
        'images/girls/girl2.jpeg', 
        'images/girls/girl3.jpeg', 
        'images/girls/girl4.jpeg'
    ],
    children: [
        'images/children/child1.jpeg', 
        'images/children/child2.jpeg', 
        'images/children/child3.jpeg', 
        'images/children/child4.jpeg'
    ],
    all: []  // Add an 'all' category if needed
};

// Combine all images into the 'all' category
for (const category in images) {
    if (category !== 'all') {
        images.all.push(...images[category]);
    }
}

// Function to load thumbnails and set up event listeners
function loadThumbnails(category) {
    // Clear existing thumbnails
    thumbnailContainer.innerHTML = '';

    // Load images for the selected category
    if (images[category]) {
        images[category].forEach((src) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Thumbnail';
            img.classList.add('thumbnail');
            
            // Event listener to change the main image when thumbnail is clicked
            img.addEventListener('click', () => {
                mainImage.src = src; // Set main image to the clicked thumbnail
            });

            thumbnailContainer.appendChild(img);
        });

        // Show the thumbnail container if images are available
        if (images[category].length > 0) {
            thumbnailContainer.style.display = 'flex'; // Change to block or flex depending on your layout
        } else {
            thumbnailContainer.style.display = 'none'; // Hide if no images are found
        }
    }
}

// Initially, set the main image to a blank state or hidden
mainImage.src = ''; // Set an empty string or hide if necessary
// You might want to hide the main image initially if needed, e.g.:
mainImage.style.display = 'none'; // Hide the main image initially

// Hide the thumbnail container initially
thumbnailContainer.style.display = 'none'; 

// Event listeners for category buttons
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        loadThumbnails(category);
        
        // Show the thumbnail container when a category button is clicked
        thumbnailContainer.style.display = 'flex'; // Show thumbnail container
        mainImage.style.display = 'none'; // Hide the main image initially
    });
});
