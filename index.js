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
  

  let validar = false


calculos.addEventListener('submit', (event) => {
  event.preventDefault();
  calcularDia();
})

function calcularDia () {
  const gustos = gustosInput.Value
  const transporte = transporteInput.value
  const alimento = alimentoInput.value

  const gastosDia = (Math.round(parseInt(gustos) - parseInt(transporte) - parseInt(alimento))).toFixed(2).replace('.' , ',');

  resultadoContainer.classList.remove('disable');
  resultado.innerText = gastosDia

}
  


