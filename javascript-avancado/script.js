// function speakGeneric(){
//     console.log(this.sound)
// }

// let dog = {
//     sound: "Au au",
//     speak: speakGeneric
// }

// let cat  = {
//     sound: "Miau",
//     speak: speakGeneric
// }

// let bindedFuntion = speakGeneric.bind(dog)

// dog.speak()
// cat.speak()
// bindedFuntion()


// let dobro = x =>{
//     console.log(2 * x)
// }


function ola(){
    console.log('Olá')
}

function saudacao(s, nome){
    s()
    console.log(nome)
}

saudacao(ola, "Felipe")

let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsario(nome, callback){
    setTimeout(() =>{
        usuarios.push(nome)
        callback()
    },1000)
}

function listarUsuario(){
    console.log(usuarios)
}
inserirUsario('Felipe',listarUsuario)
