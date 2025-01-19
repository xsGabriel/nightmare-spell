// Frases do Feitiço
const phrases = [
    "Your soul has been weighed. Your virtue has been measured.",
    "One step closer to the truth… one step further from the lies.",
    "Welcome to the Nightmare. Overcome it… or perish.",
    "The price of power is steep, yet you still yearn for it.",
];

let index = 0;
const spellText = document.getElementById("spell-text");

// Atualizar texto do Feitiço
function updatePhrase() {
    spellText.textContent = phrases[index];
    index = (index + 1) % phrases.length; // Loop infinito nas frases
}

// Troca de frase a cada 5 segundos
setInterval(updatePhrase, 1000);
