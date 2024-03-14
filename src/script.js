const texto = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function encriptar(texto) {
  for (const letra of texto) {
    if (letra === "a") {
      letra = "ai";
    }
    if (letra === "e") {
      letra = "enter";
    }
    if (letra === "i") {
      letra = "imes";
    }
    if (letra === "o") {
      letra = "ober";
    }
    if (letra === "u") {
      letra = "ufat";
    }
  }

  return texto;
}
