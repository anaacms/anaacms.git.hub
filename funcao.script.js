// Função para exibir uma mensagem de boas-vindas
function showWelcomeMessage() {
    alert("Bem-vindo ao Receitas Deliciosas!");
}

// Função para validar um formulário de comentário
function validateCommentForm() {
    const comment = document.getElementById("comment").value;
    if (!comment.trim()) {
        alert("Por favor, insira um comentário.");
        return false;
    }
    return true;
}

// Função para exibir uma imagem em tamanho grande
function showLargeImage(imageUrl) {
    const largeImage = document.getElementById("largeImage");
    largeImage.src = imageUrl;
    largeImage.style.display = "block";
}

// Função para ocultar a imagem em tamanho grande
function hideLargeImage() {
    const largeImage = document.getElementById("largeImage");
    largeImage.style.display = "none";
}
