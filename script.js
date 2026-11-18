//your JS code here. If required.

const buttons = document.getElementById("buttons");

const sounds = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory"
];

let currentAudio = null;


buttons.addEventListener("click", function (event) {

    if (event.target.classList.contains("btn")) {

        const sound = event.target.dataset.sound;

        
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Play selected sound
        currentAudio = new Audio(`sounds/${sound}.mp3`);
        currentAudio.play().catch(error => {
            console.error("Unable to play sound:", error);
        });
    }

    
    if (event.target.classList.contains("stop")) {

        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            currentAudio = null;
        }
    }
});
