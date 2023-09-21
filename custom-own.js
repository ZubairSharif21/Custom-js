
window.addEventListener('load', function() {
    var specificHotspotButton = document.querySelector('.ekit-location'); // Change this selector to the specific button you want to click
    if (specificHotspotButton) {
        specificHotspotButton.click();
    }
});

// Add click event listeners to your hotspot buttons
var hotspotButtons = document.querySelectorAll('.ekit-location');
hotspotButtons.forEach(function(button) {
    button.addEventListener('click', handleHotspotButtonClick);
});

// Function to handle hotspot button click
function handleHotspotButtonClick(event) {
    var hotspotButtons = document.querySelectorAll('.ekit-location');

    hotspotButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    var clickedButton = event.currentTarget.closest('.ekit-location');
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Hide all elements with class 'media-body'
    var mediaBodies = document.querySelectorAll('.ekit-location_outer');
    mediaBodies.forEach(function(body) {
        body.style.display = 'none';
    });

    // Show the content in the '.custom-container' div
    var customContainer = document.querySelector('.custom-container');
    customContainer.style.display = 'block';

    // Update the content in the '.custom-container' with the clicked hotspot content
    var activeContent = clickedButton.querySelector('.ekit-location-des');
    if (activeContent) {
        customContainer.innerHTML = activeContent.innerHTML;
    }
}


// Initial hide of the '.custom-container'

// Trigger a click event on a specific hotspot button on page load