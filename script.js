document.addEventListener("DOMContentLoaded", () => {
    const imageContainer = document.getElementById("image-container");
    const imageElement = document.getElementById("image");
    const tryAgainBtn = document.getElementById("try-again-btn");
    const muteBtn = document.getElementById("mute-btn");
    const backgroundMusic = document.getElementById("background-music");

    // Sample images from the "database" (replace with dynamic data)
    const images = [
        './images/img 1.png',
        './images/img 2.png',
        './images/img 3.png',
        './images/img 4.png',
        './images/img 5.png',
        './images/img 6.png',
        './images/img 7.png',
        './images/img 8.png',
        './images/img 9.png',
        './images/img 10.png',
        './images/img 11.png',
        './images/img 12.png',
        './images/img 13.png',
        './images/img 14.png',
        './images/img 15.png',
        './images/img 16.png',
        './images/img 17.png',
        './images/img 18.png',
        './images/img 19.png',
        './images/img 20.png',
        './images/img 21.png',
        './images/img 22.png',
        './images/img 23.png',
        './images/img 24.png',
        './images/img 25.png',
    ];

    let imageIndex = 0;
    let interval;
    let musicPlaying = false;  // To track if the music is playing

    // Function to start the image loop
    function startImageLoop() {
        interval = setInterval(() => {
            imageElement.src = images[imageIndex];
            imageIndex = (imageIndex + 1) % images.length;
        }, 50); // Change image every 0.05 second
    }

    // Function to stop the image loop and show a random image
    function stopImageLoop() {
        clearInterval(interval);
        const randomIndex = Math.floor(Math.random() * images.length);
        imageElement.src = images[randomIndex];
        tryAgainBtn.style.display = "block";
    }

    // Start the loop when the page is loaded
    startImageLoop();

    // Stop the loop when the user clicks anywhere on the page
    imageContainer.addEventListener('click', () => {
        stopImageLoop();
        
        // Check if the music is already playing, if not, start it
        if (!musicPlaying) {
            backgroundMusic.play().then(() => {
                musicPlaying = true;  // Update the flag after successful play
            }).catch((error) => {
                console.log("Autoplay prevented:", error);
            });
        }
    });

    // Restart the loop when "Try Again" is clicked
    tryAgainBtn.addEventListener('click', () => {
        tryAgainBtn.style.display = "none";
        startImageLoop();
    });


    // Toggle mute/unmute
    muteBtn.addEventListener('click', () => {
        if (backgroundMusic.muted) {
            backgroundMusic.muted = false;
            muteBtn.textContent = '🔊';  // Change to unmuted icon
        } else {
            backgroundMusic.muted = true;
            muteBtn.textContent = '🔇';  // Change to muted icon
        }
    });

});