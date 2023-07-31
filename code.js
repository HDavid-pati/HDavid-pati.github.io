const cero = document.querySelector('.cero')
const uno = document.querySelector('.uno')
const dos = document.querySelector('.dos')
const tres = document.querySelector('.tres')
const cuatro = document.querySelector('.cuatro')
const cinco = document.querySelector('.cinco')
const seis = document.querySelector('.seis')
const siete = document.querySelector('.siete')
const ocho = document.querySelector('.ocho')
const nueve = document.querySelector('.nueve')
let factorLeft = ''
let factorRight = ''
let typeOper = []
const mas = document.querySelector('.mas')
const menos = document.querySelector('.menos')
const multipli = document.querySelector('.multipli')
const division = document.querySelector('.division')
const result = document.querySelector('.result')
const delet = document.querySelector('.delete')
let resultOper = 0
let aux1 = []
let cifras = 0
let factorConComaLeft = ''
const clear = document.querySelector('.clear')
const punto = document.querySelector('.punto')
const divPantalla = document.getElementById('miInput')

function tomarFocusDeeInput(){
  document.getElementById('miInput').focus()
}

function separarConComas(num){
  if(typeOper.length < 1 ){
    factorLeft += num
    if(factorLeft.length > 3){
      aux1 = []
      cifras = 0
      for (let i = factorLeft.length -1; i >= 0; i--) {
        cifras++
        if(factorLeft[i] == '.'){
          cifras = 0
          aux1.unshift(factorLeft[i])
        }
        else if(cifras == 3 && factorLeft[i-1] != null && factorLeft[i-1] != '.'){
          aux1.unshift(factorLeft[i])
          aux1.unshift(',')
          cifras = 0
        }else if(factorLeft[i] != null){
            aux1.unshift(factorLeft[i])
        }
      }
      document.querySelector('.operación').innerHTML = aux1.join('')
      factorConComaLeft = aux1.join('')
    } else {
        document.querySelector('.operación').innerHTML += num
        factorConComaLeft = factorLeft
      }
  }else{
    factorRight += num
    if(factorRight.length > 3){
      aux1 = []
      cifras = 0
      for (let i = factorRight.length -1; i >= 0; i--) {
        cifras++
        if(factorRight[i] == '.'){
          cifras = 0
          aux1.unshift(factorRight[i])
        }
        else if(cifras == 3 && factorRight[i-1] != null && factorRight[i-1] != '.'){
          aux1.unshift(factorRight[i])
          aux1.unshift(',')
          cifras = 0
        }else if(factorRight[i] != null){
          aux1.unshift(factorRight[i])
        }
      }
      if(resultOper > 0){
        ponerComasAFactorLeftObtenidoDeResultOper(factorLeft)
      }
      else{document.querySelector('.operación').innerHTML = factorConComaLeft + typeOper[0]+ aux1.join('')}
    } 
    else {document.querySelector('.operación').innerHTML += num}
  }
}
function ponerComasAFactorLeftObtenidoDeResultOper(str){
  let cifras3 = 0
  let aux3 = []
  for(let i=str.length -1; i>=0; i--){
    cifras3++
    if(cifras3 == 3 && str[i-1] != undefined){
      aux3.unshift(str[i])
      aux3.unshift(',')
      cifras3 = 0
    }
    else{aux3.unshift(str[i])}
  }
  document.querySelector('.operación').innerHTML = aux3.join('')+ typeOper[0]+ aux1.join('')
}

function verificarSiFactorLeftTienePunto(){
  for(let i = 0; i< factorLeft.length; i++){
    if(factorLeft[i] == '.'){
      return true
    }
  }
  return false
}
function verificarSiFactorRightTienePunto(){
  for(let i = 0; i< factorRight.length; i++){
    if(factorRight[i] == '.'){
      return true
    }
  }
  return false
}
function operacionDecimal(num){
  if(typeOper.length > 0){
    factorRight += num
    document.querySelector('.operación').innerHTML = factorLeft + typeOper[0]+ factorRight
  }
  else{
    factorLeft += num
    document.querySelector('.operación').innerHTML = factorLeft 
  }
}
cero.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(0)
  }
  else{ separarConComas(0)}
})
uno.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(1)
  }
  else{ separarConComas(1)}
})
dos.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(2)
  }
  else{ separarConComas(2)}
})
tres.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(3)
  }
  else{ separarConComas(3)}
})
cuatro.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(4)
  }
  else{ separarConComas(4)}
})
cinco.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(5)
  }
  else{ separarConComas(5)}
})
seis.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(6)
  }
  else{ separarConComas(6)}
})
siete.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(7)
  }
  else{ separarConComas(7)}
})
ocho.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(8)
  }
  else{ separarConComas(8)}
})
nueve.addEventListener('click',function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal(9)
  }
  else{ separarConComas(9)}
})
punto.addEventListener('click', function(){
  if(verificarSiFactorLeftTienePunto() || verificarSiFactorRightTienePunto()){
    operacionDecimal('.')
  }
  else{ separarConComas('.')}
})

function agregarFactor(str){
    document.querySelector('.operación').innerHTML += str
    if( resultOper >0){
        factorLeft = resultOper.toString()
    }
    typeOper.push(str)
}
mas.addEventListener('click',function(){
    agregarFactor(' + ')
})
menos.addEventListener('click',function(){
    agregarFactor(' - ')
})
multipli.addEventListener('click',function(){
    agregarFactor(' x ')
})
division.addEventListener('click',function(){
    agregarFactor(' / ')
})

function verificarSiResultadoTienePunto(str){
  for(let i=0; i< str.length; i++){
    if(str[i] == '.'){
      return true
    }
  }
  return false
}
function ponerComasAlResultado(num){
  let str = num.toString()
  if(verificarSiResultadoTienePunto(str)){
    document.querySelector('.operación').innerHTML = str
    return false
  }
  let cifras2 = 0
  let aux2 = []
  for(let i=str.length -1; i>= 0; i--){
    cifras2++
    if(cifras2 == 3 && str[i-1] != undefined){
      aux2.unshift(str[i])
      aux2.unshift(',')
      cifras2 = 0
    }
    else{aux2.unshift(str[i])}
  }
  document.querySelector('.operación').innerHTML = aux2.join('')
}
let num1 = ''
let num2 = ''
result.addEventListener('click',function(){
    if(typeOper.includes(' + ')){
        num1 = parseFloat(factorLeft)
        num2 = parseFloat(factorRight)
        resultOper = num1 + num2
        historial(factorLeft, '+', factorRight, resultOper)
        ponerComasAlResultado(resultOper)
        typeOper.pop()
        factorLeft = ''
        factorRight = ''
    }
    if(typeOper.includes(' - ')){
        resultOper = factorLeft - factorRight
        historial(factorLeft, '-', factorRight, resultOper)
        ponerComasAlResultado(resultOper)
        typeOper.pop()
        factorLeft = ''
        factorRight = ''
    }
    if(typeOper.includes(' x ')){
        resultOper = factorLeft * factorRight
        historial(factorLeft, 'x', factorRight, resultOper)
        ponerComasAlResultado(resultOper)
        typeOper.pop()
        factorLeft = ''
        factorRight = ''
    }
    if(typeOper.includes(' / ')){
        resultOper = factorLeft / factorRight
        historial(factorLeft, '/', factorRight, resultOper)
        ponerComasAlResultado(resultOper)
        typeOper.pop()
        factorLeft = ''
        factorRight = ''
    }
})
let auxOfFactorLeft = ''
let auxOfFactorRight = ''
clear.addEventListener('click', function(){
  factorLeft = ''
  factorRight = ''
  resultOper = 0
  document.querySelector('.operación').innerHTML = ''
  typeOper = []
})

delet.addEventListener('click',function(){
  let faLef = factorLeft.split('')
  let faRight = factorRight.split('')
  if(factorLeft.length >0 && typeOper.length >0 && factorRight.length >0){
    faRight.pop()
    factorRight = faRight.join('')
    dejarConComasALeftDespuesDeEliminarUnNumero(factorLeft)
    dejarConComasARightDespuesDeEliminarUnNumero(factorRight)
    document.querySelector('.operación').innerHTML = auxOfFactorLeft + typeOper[0]+ auxOfFactorRight
  }
  else if(factorLeft.length >0 && typeOper.length >0 && factorRight.length <1){
    typeOper.pop()
    dejarConComasALeftDespuesDeEliminarUnNumero(factorLeft)
    document.querySelector('.operación').innerHTML = auxOfFactorLeft
  }
  else if(factorLeft.length >0 && typeOper.length <1 && resultOper >0){
    resultOper = 0
    document.querySelector('.operación').innerHTML = ''
    factorLeft = ''
  }
  else{
    faLef.pop()
    factorLeft = faLef.join('')
    dejarConComasALeftDespuesDeEliminarUnNumero(factorLeft)
    document.querySelector('.operación').innerHTML = auxOfFactorLeft
    resultOper = 0
  }
})
let cifras4 = 0
let aux4 = []
function dejarConComasALeftDespuesDeEliminarUnNumero(str){
  cifras4 = 0
  aux4 = []
  if(str.length >3){
    for(let i= str.length -1; i>=0; i--){
      cifras4++
      if(str[i] == '.'){
        cifras4 = 0
        aux4.unshift(str[i])
      }
      else if(cifras4 == 3 && str[i-1] != undefined){
        aux4.unshift(str[i])
        aux4.unshift(',')
        cifras4 = 0
      }
      else{aux4.unshift(str[i])}
    }
    auxOfFactorLeft = aux4.join('')
  }
  else{auxOfFactorLeft = factorLeft}
}
let cifras5 = 0
let aux5 = []
function dejarConComasARightDespuesDeEliminarUnNumero(str){
  cifras5 = 0
  aux5 = []
  if(str.length >3){
    for(let i= str.length -1; i>=0; i--){
      cifras5++
      if(str[i] == '.'){
        cifras5 = 0
        aux5.unshift(str[i])
      }
      else if(cifras5 == 3 && str[i-1] != undefined){
        aux5.unshift(str[i])
        aux5.unshift(',')
        cifras5 = 0
      }
      else{aux5.unshift(str[i])}
    }
    auxOfFactorRight = aux5.join('')
  }
  else{auxOfFactorRight = factorRight}
}