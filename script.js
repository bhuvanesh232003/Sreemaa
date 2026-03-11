// Romantic letter content
const letterContent = [
    "My gentle thought that never leaves me,",
    "",
    "Dear Jai Sree,",
    "",
    "Sometimes I sit in silence and wonder how a single person could quietly become the calm inside my restless days, and in those moments I realize how deeply you, Jai Sree, live in the corners of my mind without even trying.",
    "",
    "Like the soft lavender that fills the air without asking for attention, your presence lingers in my thoughts from morning light until the quiet hours of night.",
    "",
    "There are times when I catch myself smiling for no reason at all, only to discover that somewhere in that moment my mind had wandered back to you again.",
    "",
    "If beauty could be written like poetry, Jai Sree, the pages would borrow the grace of your smile and the quiet magic that follows wherever you walk.",
    "",
    "And sometimes I wonder how fate allowed someone like me to stand close enough to witness a soul as rare and gentle as yours.",
    "",
    "Perhaps the luckiest thing that ever happened to my ordinary life was the quiet day you, Jai Sree, stepped into it and turned my thoughts into something softer.",
    "",
    "How much care you have shown me, and how deeply you have become important to me. Through every moment, I wish I could give you the entire world. Even when words fail and pain touches us, I will always choose to care for you because you mean everything to me.",
    "",
    "You are so very special to me. I feel incredibly blessed and fortunate to have you in my life. I am so lucky to have you by my side.",
    "",
    "Every single day, I pray to God for your happiness, for your smile, for your peace. I am grateful every moment for bringing you into my life. I will always be with you, through every high and every low, and I promise to be the reason behind your happiness.",
    "",
    "Thank you, Sree, for everything. There are no words beautiful enough to describe what you mean to me. You are pure magic. All the poetry in the world, all the beautiful words of love—they were created just to describe someone like you.",
    "",
    "I promise that I will always be by your side, today and forever, in your every moment. I thank God every day for you, and I will spend my entire life making sure you feel loved, cherished, and happy.",
    "",
    "Forever yours, with all my heart."
];

// Function to display the letter with typing animation
function displayLetter() {
    const letterText = document.getElementById('letter-text');
    let currentIndex = 0;

    function addNextLine() {
        if (currentIndex < letterContent.length) {
            const p = document.createElement('p');
            p.textContent = letterContent[currentIndex];
            p.style.opacity = '0';
            letterText.appendChild(p);

            // Fade in animation
            setTimeout(() => {
                p.style.opacity = '1';
            }, 100);

            currentIndex++;
            setTimeout(addNextLine, 800); // Delay between lines
        }
    }

    addNextLine();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', displayLetter);