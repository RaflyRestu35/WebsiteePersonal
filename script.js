const texts = [
    "I am a student at SMK Binusta.",
    "This is my personal website."
];
const container = document.getElementById('typing-container');
let textIndex = 0;
let charIndex = 0;
let deleting = false;
let typingSpeed = 100; // Kecepatan mengetik dalam milidetik
let deletingSpeed = 50; // Kecepatan menghapus dalam milidetik
let pauseBetweenTexts = 1500; // Jeda antara paragraf dalam milidetik

function type() {
    if (deleting) {
        if (charIndex > 0) {
            container.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, deletingSpeed);
        } else {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, pauseBetweenTexts);
        }
    } else {
        if (charIndex < texts[textIndex].length) {
            container.textContent = texts[textIndex].substring(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            deleting = true;
            setTimeout(type, pauseBetweenTexts);
        }
    }
}

type();
