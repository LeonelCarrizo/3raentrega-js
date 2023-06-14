  const calculosInput = document.getElementById('calculos');
  const fechaHoyInput = document.getElementById('FechaHoy');
  const presupuestoInput = document.getElementById('Presupuesto');
  const gustosInput = document.getElementById('Gustos');
  const transporteInput = document.getElementById('Transporte');
  const alimentoInput = document.getElementById('Alimento');
  const resultadoContainer = document.getElementById('resultadoContainer');
  const resultado = document.getElementById('resultado');
  const inputsCalculos = document.querySelectorAll('formulario__inputs');
  const btnSi = document.getElementById('btnSi');
  const btnNo = document.getElementById('btnNo');
  const btnCalcular = document.getElementById('btnCalcular');
  const btnGastos = document.getElementById('btnGastos');
  const btnBorrar = document.getElementById('btnBorrar')
  

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

btnSi.addEventListener('click', () => {
  calculos.reset()
  resultadoContainer.classList.add('disable')
   btnCalcular.classList.add('buttonDisable')
  
})

btnNo.addEventListener('click', () => {
swal({
  title: "Un placer",
  text: "Nos encanta ayudarlo con su ecocnomia diaria!",
  icon: "success",
  button: "Volver al Inicio!",
});
 calculos.reset()
  resultadoContainer.classList.add('disable')
   btnCalcular.classList.add('buttonDisable')

})
  
localStorage.setItem('fechaHoyInput', fechaHoyInput)
localStorage.setItem('presupuestoInput', presupuestoInput)
localStorage.setItem('gustosInput', gustosInput)
localStorage.setItem('transporteInput', transporteInput)
localStorage.setItem('alimentoInput', alimentoInput)


//ACCION LOCAL STORAGE
btnGastos.addEventListener('click', () => {
  let fecha = localStorage.getItem(fechaHoyInput)
  let presupuesto = localStorage.getItem(presupuestoInput)
  let gustos = localStorage.getItem(gustosInput)
  let transporte = localStorage.getItem(transporteInput)
  let alimento = localStorage.getItem(alimentoInput)
  console.log(presupuestoInput)

})

// btnBorrar.addEventListener('change', () => {
//   localStorage.clear()
//   alert("se han borrado")
// })

