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


// function ola(){
//     console.log('Olá')
// }

// function saudacao(s, nome){
//     s()
//     console.log(nome)
// }

// saudacao(ola, "Felipe")

let usuarios = ["Adriano", "Marcia", "José"]

function inserirUsario(nome){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() =>{
            usuarios.push(nome)

            let error = false
            if(!error){
                resolve()
            }else{
                reject({msg: "erro de qualquer coisa"})
            }
            
        },1000)
    })
        return promise
    }


function listarUsuario(){
    console.log(usuarios)
}
inserirUsario('Felipe').then(listarUsuario)
