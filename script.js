// Frases do Feitiço em Português
const frases = [
    "Sua alma foi pesada. Sua virtude foi medida.",
    "Um passo mais próximo da verdade... um passo mais longe das mentiras.",
    "Bem-vindo ao Pesadelo. Supere-o... ou pereça.",
    "O preço do poder é alto, mas você ainda o deseja.",
];

let indice = 0;
const spellText = document.getElementById("spell-text");

// Atualizar texto do Feitiço
function atualizarFrase() {
    spellText.textContent = frases[indice];
    indice = (indice + 1) % frases.length; // Loop infinito nas frases
}

// Troca de frase a cada 5 segundos
setInterval(atualizarFrase, 5000);

