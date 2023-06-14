  const calculosInput = document.getElementById('calculos');
  const fechadehoyInput = document.getElementById('Fechadehoy');
  const presupuestoInput = document.getElementById('Presupuesto');
  const gustosInput = document.getElementById('Gustos');
  const transporteInput = document.getElementById('Transporte');
  const alimentoInput = document.getElementById('Alimento');
  const btnGastos = document.getElementById('btnGastos');
  const resultadoContainer = document.getElementById('resultadoContainer');
  const resultado = document.getElementById('resultado');
  const inputsCalculos = document.querySelectorAll('formulario__inputs');
  const bntSi = document.getElementById('bntSi');
  const btnNo = document.getElementById('btnNo');
  

  let validar = false


calculos.addEventListener('submit', (event) => {
  event.preventDefault();
  calcularDia();
})

function calcularDia () {
  const gustos = gustosInput.value
  const transporte = transporteInput.value
  const alimento = alimentoInput.value

  console.log(gustos);
  console.log(transporte);
  console.log(alimento);

  const subtotal = parseInt(presupuestoInput.value) - parseInt(gustos) - parseInt(transporte) - parseInt(alimento)

  

  resultadoContainer.classList.remove('disable');
  resultado.innerText = `Total disponible: $${subtotal}`

}

//PANTALLA VERDE

bntSi.addEventListener('click', () => {
  calculos.reset()
  
})
  


