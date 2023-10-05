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

var btn = document.querySelector(".enviar");
var btn2 = document.querySelector("#btn1")


btn.addEventListener("click", click);
btn2.addEventListener("click", click);

function Enviar(){
    alert("Mensagem enviada com sucesso, aguarde uma resposta de um de nossos atendentes de suporte em seu e-mail!");
};

function Aviso(){
    window.prompt("Adicione seu e-mail para ficar por dentro do lançamento de nossos planos!")
}