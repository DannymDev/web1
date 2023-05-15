const output = document.getElementById('output');
const input = document.getElementById('input');


const text = `Danny:  Me encanta crear aplicaciones que son fáciles de usar, útiles y bonitas.
Soy un apasionado desarrollador. Mi objetivo principal es brindar soluciones tecnológicas efectivas que mejoren la vida de las personas.
Mi constante sed de conocimiento me impulsa a estar siempre aprendiendo algo nuevo en el ámbito de la tecnología. Gracias a esto, he adquirido sólidos conocimientos en diversas áreas, como el desarrollo frontend, backend, mobile, devops, y más.

Estoy familiarizado con tecnologías web modernas.`;

let index = 0;

function typeWriter() {
  if (index < text.length) {
    output.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30); // Ajusta la velocidad de escritura aquí (en milisegundos)
  }
}

window.addEventListener('load', () => {
  typeWriter();
});

input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = input.value;
    input.value = '';

    executeCommand(command);
  }
});

function executeCommand(command) {
  let result = '';

  if (command === 'about') {
    result = `Danny: Me encanta crear aplicaciones que son fáciles de usar, útiles y bonitas.
Soy un apasionado desarrollador. Mi objetivo principal es brindar soluciones tecnológicas efectivas que mejoren la vida de las personas.
Mi constante sed de conocimiento me impulsa a estar siempre aprendiendo algo nuevo en el ámbito de la tecnología. Gracias a esto, he adquirido sólidos conocimientos en diversas áreas, como el desarrollo frontend, backend, mobile, devops, y más.`;
  } else {
    result = `Command not found: ${command}`;
  }

  logOutput(`$ ${command}\n${result}`);
}

function logOutput(message) {
  const log = document.createElement('p');
  log.innerHTML = message;
  output.appendChild(log);
  output.scrollTop = output.scrollHeight;
}
