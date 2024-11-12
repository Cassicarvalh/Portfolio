document.addEventListener("DOMContentLoaded", function() {

    // Cria um observer para monitorar a entrada da imagem na tela
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando a imagem entra na tela, adiciona a classe de animação
                entry.target.classList.add('scale-in-hor-center');
    
                // Para garantir que a animação será reaplicada a cada vez que a imagem entra na tela
                // Remova a classe de animação após um pequeno intervalo para reiniciar a animação
                setTimeout(() => {
                    entry.target.classList.remove('scale-in-hor-center');
                }, 500); // O mesmo tempo da animação para garantir que a animação seja "reiniciada"
            }
        });
    }, {
        threshold: 0.1 // Define a porcentagem da imagem que precisa estar visível para ser acionada
    });
    
    // Alvo: seleciona todas as imagens que você quer observar
    const images = document.querySelectorAll('img'); // Seleciona todas as imagens da página
    images.forEach(image => {
        observer.observe(image); // Observa cada imagem
    });
    
    // Obtém o botão
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Quando o usuário rolar para baixo 100px da parte superior da página, mostra o botão
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Mostra o botão
    } else {
        scrollToTopBtn.style.display = "none"; // Esconde o botão
    }
};

// Quando o botão for clicado, rola para o topo da página
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Faz a rolagem ser suave
    });
};

    
    });