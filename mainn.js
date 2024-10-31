let valor1 = '';
let valor2 = '';
let operador = '';
let resultado = '';
let pantalla = document.getElementById("total");
let nuevoCalculo = false; 


const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.value === "AC") {
      limpiarPantalla();
    } else if (["+", "-", "x", "/"].includes(boton.value)) {
      establecerOperador(boton.value);
    } else if (boton.value === "=") {
      calcularResultado();
    } else {
      agregarNumero(boton.value);
    }
  });
});


function agregarNumero(numero) {
  
  if (nuevoCalculo) {
    pantalla.value = '';
    nuevoCalculo = false;
  }
  pantalla.value += numero;
}


function establecerOperador(op) {
  if (!pantalla.value && resultado) {
    
    valor1 = resultado.toString();
  } else if (!pantalla.value) {
    return; 
  } else {
    valor1 = pantalla.value;
  }
  operador = op;
  pantalla.value = ''; 
}


function calcularResultado() {
  if (!pantalla.value || !operador) return; 
  valor2 = pantalla.value;
  let num1 = parseFloat(valor1);
  let num2 = parseFloat(valor2);

  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case 'x':
      resultado = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        alert("No se puede dividir por 0");
        limpiarPantalla();
        return;
      }
      resultado = num1 / num2;
      break;
  }

  pantalla.value = resultado;
  valor1 = resultado; 
  nuevoCalculo = true; 
}


function limpiarPantalla() {
  pantalla.value = '';
  valor1 = '';
  valor2 = '';
  operador = '';
  resultado = '';
  nuevoCalculo = false;
}
