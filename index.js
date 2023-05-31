let calculos = document.getElementById('calculos')

calculos.addEventListener('submit', calcGastos)

function getValues() {
  let Fechadehoy = document.getElementById('Fechadehoy').value,
      Presupuesto = document.getElementById('Presupuesto').value,
      Gustos = document.getElementById('Gustos').value,
      Transporte = document.getElementById('Transporte').value,
      Alimento = document.getElementById('Alimento').value
      btnGastos = document.getElementById('btnGastos')

  return { Fechadehoy, Presupuesto, Gustos, Transporte, Alimento }    
}

const datos = {
  Fechadehoy,
  Presupuesto,
  Gustos,
  Transporte,
  Alimento,
  btnGastos
}
  
localStorage.setItem('calculos', JSON.stringify(datos))

// localStorage.setItem('Presupuesto', Presupuesto)
// console.log(Presupuesto)


//ACCION DE VER EL LOCAL SOTORAGE
 btnGastos.addEventListener('click', () => {
  let Presupuesto = localStorage.getItem('Presupuesto')
 })

btnGastos.addEventListener('click', () => {
  let Presupuesto = localStorage.getItem('Presupuesto')
  console.log(Presupuesto)
})



function calcGastos(e) {
  e.preventDefault();
  
  const  { Fechadehoy, Presupuesto, Gustos, Transporte, Alimento } = getValues()

  let Gastos = parseInt(Gustos) + parseInt(Transporte) + parseInt(Alimento)
  let balance = Presupuesto - Gastos

  UI(Fechadehoy, Presupuesto, balance)
}

function UI(Fechadehoy, Presupuesto, balance) {
  let result = document.getElementById('result')
  let dataPrint = document.createElement('Fechadehoy')

    dataPrint.innerHTML += `
    <div class="container-data row">
      <div class="col s4">
        <h6>${Fechadehoy}</h6>
      </div>
      <div class="col s4">
        <h6>${Presupuesto}</h6>
      </div>
      <div class="col s4">
        <h6 id="balance"><strong>${balance}</strong></h6> 
      </div>
    </div>
  `
  result.appendChild(dataPrint) 

  reset()
}

function reset() {
  document.getElementById('calculos').reset()
}

function balanceColours() {

  const { balance} = getValues()


    if(balance < 0) {
      document.getElementById('balance').classList.add('red')
    }
    else if(balance > 0) {
      document.getElementById('balance').classList.add('green')
    }
}

