// Butonlara tıklanınca ses çal
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.dataset.sound);
        addAnimation(button);
    });
});

// Klavyeden tuşa basılınca ilgili sesi çal
document.addEventListener("keydown", event => {
    let button = document.querySelector(`.drum[data-key="${event.key.toUpperCase()}"]`);
    if (button) {
        playSound(button.dataset.sound);
        addAnimation(button);
    }
});

// Ses çalma fonksiyonu
function playSound(soundPath) {
    let audio = new Audio(soundPath);
    audio.currentTime = 0; // Üst üste çalma için sıfırla
    audio.play();
}

// Animasyon ekleme fonksiyonu
function addAnimation(button) {
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 100);
}
