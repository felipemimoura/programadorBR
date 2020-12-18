// let image = document.getElementById('like')

// image.addEventListener("click", function(){
//   // let lastImage = image.getAttribute("src")
//   // image.setAttribute("src", "./img/tumbs-down.png")
//   image.setAttribute("cor", "vermelho")

  
// })

// let lista = document.getElementById('lista')

// let numero = parseInt(lista.getAttribute('num'))

// let conteudo = ""

// for(let i =0; i <numero; i++){
//   conteudo += `<li>  ${i} </li>`
// }

// lista.innerHTML = conteudo

// let lista = document.getElementById('lista')
// lista.dataset.num ="4"

// let id = lista.dataset.id
// console.log(id)

// let numero = parseInt(lista.dataset.num)



// let conteudo = ""

// for(let i =0; i <numero; i++){
//   conteudo += `<li>  ${i} </li>`
// }

// lista.innerHTML = conteudo

let video = document.getElementById('video1')

function retroceder(){
  video.currentTime -= 15
}

function avancar(){
  video.currentTime += 15
}
function play(){
  video.play()
}

function pausar(){
  video.pause()
}