  const calculosInput = document.getElementById('calculos');
  const FechadehoyInput = document.getElementById('Fechadehoy');
  const PresupuestoInput = document.getElementById('Presupuesto');
  const GustosInput = document.getElementById('Gustos');
  const TransporteInput = document.getElementById('Transporte');
  const AlimentoInput = document.getElementById('Alimento');
  const btnGastos = document.getElementById('btnGastos');
  const resultadoContainer = document.getElementById('resultadoContainer');
  const inputsCalculos = document.querySelectorAll('formulario__inputs" ')
  let validar = false


calculos.addEventListener('submit', (event) => {
  event.preventDefault();
  calcularDia();
})

function calcularDia () {
  const Gustos = Gustos.Value
  const Transporte = Transporte.value
  const Alimento = Alimento.value

  const gastosDia = (Math.round(Gustos - Transporte - Alimento)).toFixed(2).replace('.' , ',');

  resultadoContainer.classList.remove('disable');

}
  
inputsCalculos.forEach(input => {
  console.log(input)
})

