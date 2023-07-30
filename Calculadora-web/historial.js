const historialVar = document.querySelector('.historial-de-operaciones')
let num = '';
function ponerComasANumeros(num1){
  let arrOfNum = []
  let countOfNums = 0
  num = num1
  if(typeof num1 == 'number'){
     num = num1.toString()
  }
  if(num.length > 3){
    for(let i= num.length -1; i>= 0; i--){
      countOfNums++
      if(countOfNums == 3 && num[i-1] != undefined){
        arrOfNum.unshift(num[i])
        arrOfNum.unshift(',')
        countOfNums = 0
      }
      else{
        arrOfNum.unshift(num[i])
      }
    }
    return arrOfNum.join('')
  }
  else{ return num }
}

function historial(factorLeft, typeOper, factorRight, resultadoo){
  const operacion = document.createElement('div')
  operacion.classList.add('contenedor-de-operacion')
  const numLeft = document.createElement('p')
  const numRight = document.createElement('p')
  const tipoDeOperacion = document.createElement('p')
  const resultado = document.createElement('p')
  numLeft.classList.add('num-left', 'center')
  numRight.classList.add('num-right', 'center')
  tipoDeOperacion.classList.add('tipe-oper', 'center')
  resultado.classList.add('resultado', 'center')
  switch(typeOper){
    case '+': {
      tipoDeOperacion.innerText = '+'
      break
    }
    case '-': {
      tipoDeOperacion.innerText = '_'
      break
    }
    case 'x': {
      tipoDeOperacion.innerText = 'x'
      break
    }
    case '/': {
      tipoDeOperacion.innerText = '/'
    }
  }
  if(verificarSiResultadoTienePunto(factorLeft)){
    numLeft.innerText = factorLeft
  }
  if(!verificarSiResultadoTienePunto(factorLeft)){
    numLeft.innerText = ponerComasANumeros(factorLeft)
  }
  if(verificarSiResultadoTienePunto(factorRight)){
    numRight.innerText = factorRight
  }
  if(!verificarSiResultadoTienePunto(factorRight)){
    numRight.innerText = ponerComasANumeros(factorRight)
  }
  if(verificarSiResultadoTienePunto(resultadoo.toString())){
    resultado.innerText = resultadoo
  }
  if(!verificarSiResultadoTienePunto(resultadoo.toString())){
    resultado.innerText = ponerComasANumeros(resultadoo)
  }
  operacion.append(numLeft, tipoDeOperacion, numRight, resultado)
  historialVar.append(operacion)
}
