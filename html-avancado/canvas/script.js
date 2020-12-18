// let jogador = document.getElementById('jogador')
// let xInicial = 0
// let yInicial = 0

// function moverJogadorPara(x, y){

//   let posX = x + "px"
//   let posY = y + "px"
//   jogador.style.top = posX
//   jogador.style.left = posY
  
// }

// setInterval(function(){
//   moverJogadorPara(xInicial++,yInicial++ )
// },500)

let tela = document.getElementById('tela')
let context = tela.getContext("2d")

// context.moveTo(0,0)
// context.lineTo(250,250)
// context.lineTo(500,0)
// context.strokeStyle ="blue"
// context.stroke()

// context.rect(10,10,100,200)

// context.fillStyle = 'blue'
// context.fillRect(10,10,100,200)
// context.strokeStyle = 'red'
// context.strokeRect(10,10,100,200)
// context.fill()
// context.stroke()

// context.clearRect(20,20,30,30)



let circle ={
  x: 250,
  y: 250,
  raio: 100,
  inicio: 0,
  fim: 0
}
function drawCircle(circle){

  context.beginPath()
  context.rect(0,0,500,500)
  context.fillStyle = 'beige'
  context.fill()

context.beginPath()
context.strokeStyle = 'red'
context.arc(circle.x, circle.y,circle.raio, circle.inicio, circle.fim)
context.stroke()
}


setInterval(function(){
  if(circle.fim < 2 * Math.PI){
    circle.fim += 0.3
    circle.x += 3
  }
  drawCircle(circle)
},150)
