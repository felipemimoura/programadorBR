// console.log('Acessando Elementos HTML')
// let p1 = document.getElementById('p1')
// console.log(p1)

// let paragrafos = document.getElementsByClassName('paragrafo')
// console.log(paragrafos)

// let todosParagrafos = document.getElementsByTagName("p")
// console.log(todosParagrafos)
// console.log('Modificando elementos')
// let p = document.getElementById('p1')
// p.innerHTML = 'Novo Conteudo'
// p.innerText = "Conteudo mais novo"
// p.textContent = 'Mais novo ainda'

// p.className = 'texto'

// console.log('Eventos')
// function h1Click(){
//   console.log('Executando a função')
// }

// function changeH1(input){
//   let h1 = document.getElementsByTagName("h1")[0]
//   h1.innerText = input.value;
// }

// let t = document.getElementById('titulo')
// t.innerHTML = 'RRR'


function sortear(){

  let pessoas = ['Igor', 'José', 'Marcos', 'Pamela' ,'Joana']
  let np = pessoas.length;

  let ns = Math.floor(Math.random() * np)

  document.getElementById('titulo').innerHTML = pessoas[ns]
}