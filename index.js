  const calculosInput = document.getElementById('calculos');
  const fechaHoyInput = document.getElementById('FechaHoy');
  const presupuestoInput = document.getElementById('Presupuesto');
  const gustosInput = document.getElementById('Gustos');
  const transporteInput = document.getElementById('Transporte');
  const alimentoInput = document.getElementById('Alimento');
  const resultadoContainer = document.getElementById('resultadoContainer');
  const resultado = document.getElementById('resultado');
  const inputsCalculos = document.querySelectorAll('formulario__inputs');
  
  const inputsForm2 = document.querySelectorAll(
    ".simulador__formularioFin-form-input"
  );
  
  const btnSi = document.getElementById('btnSi');
  const btnNo = document.getElementById('btnNo');
  const btnCalcular = document.getElementById('btnCalcular');
  const btnGastos = document.getElementById('btnGastos');
  const btnBorrarCalculos =document.getElementById('btnBorrarCalculos')
  const btnBorrarEspecifico = document.getElementById("btnBorrarEspecifico");
  const btnBorrar = document.getElementById('btnBorrar');
  const containerBorrar = document.getElementById("containerBorrar");
  const inputBorrar = document.getElementById("inputBorrar"); 
  const containerDeDias = document.getElementById(
    "containerDeDias"
  );
  

  let validar = false;
  let validar2 = false;
  const arrayCalculos = [];
  


calculos.addEventListener('submit', (event) => {
  event.preventDefault();
  calcularDia();
})



function calcularDia () {
  const presupuesto = presupuestoInput.value;
  const gustos = gustosInput.value;
  const transporte = transporteInput.value;
  const alimento = alimentoInput.value;

  
  console.log(presupuesto);
  console.log(gustos);
  console.log(transporte);
  console.log(alimento);

  const subtotal = parseInt(presupuestoInput.value) - parseInt(gustos) - parseInt(transporte) - parseInt(alimento)

  

  resultadoContainer.classList.remove('disable');
  resultado.innerText = `Total disponible: $${subtotal}`


}

const nuevoPresupuesto = {
  FechaHoy: fechaHoyInput.value,
  presupuesto: presupuestoInput.value,
  gustos: gustosInput.value,
  transporte: transporteInput.value,
  alimento: alimentoInput.value,
  
}

arrayCalculos.push(nuevoPresupuesto);
localStorage.setItem("calculos", JSON.stringify(arrayCalculos));
console.log()


function mostrarHistorial() {
  const historial = JSON.parse(localStorage.getItem('calculos'));


historial.forEach( el => {
  

  containerDeDias.innerHTML = `<p>${el.FechaHoy} ${el.presupuestoInput} ${el.gustos} ${el.transporte} ${el.alimento} </p>`


  historial.appendChild(containerDeDias);
})
}
// //PANTALLA VERDE

btnSi.addEventListener('click', () => {
  calculos.reset()
  resultadoContainer.classList.add('disable')
   btnCalcular.classList.add('buttonDisable')
  
})


btnNo.addEventListener('click', () => {
    ultimoFormulario.classList.remove("disable");
  });

 
  function enviarFormulario() {
    const nombre = inputsForm2[0].value;
    const apellido= inputsForm2[1].value;
    const email = inputsForm2[2].value;
    const dni = inputsForm2[3].value;
    const telefono = inputsForm2[4].value;
    const FechaHoy = fechaHoyInput.value;
    const presupuesto = presupuestoInput.value;
    const gustos = gustosInput.value;
    const transporte = transporteInput.value;
    const alimento = alimentoInput.value;
    const subtotal = Math.round(presupuesto - gustos - transporte - alimento)
  }

  
  

  


  
localStorage.setItem('fechaHoyInput', fechaHoyInput.value)
localStorage.setItem('presupuestoInput', presupuestoInput.value)
localStorage.setItem('gustosInput', gustosInput.value)
localStorage.setItem('transporteInput', transporteInput.value)
localStorage.setItem('alimentoInput', alimentoInput.value)


//ACCION LOCAL STORAGE
btnGastos.addEventListener('click', () => {

  let fecha = localStorage.getItem(fechaHoyInput.value)
  let presupuesto = localStorage.getItem(presupuestoInput.value)
  let gustos = localStorage.getItem(gustosInput.value)
  let transporte = localStorage.getItem(transporteInput.value)
  let alimento = localStorage.getItem(alimentoInput.value)
  
  console.log(fechaHoyInput.value, presupuestoInput.value, gustosInput.value, transporteInput.value, alimentoInput.value)

})

btnBorrar.addEventListener('change', () => {
  localStorage.clear()
  alert("se han borrado")
})

btnBorrarCalculos.addEventListener('click', () => {
  
})
