document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".banner img");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.style.display = "block";
            } else {
                img.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Mostra a primeira imagem
    showImage(currentIndex);

    // Inicia a troca automática a cada 3 segundos (3000ms)
    setInterval(nextImage, 3000);
});