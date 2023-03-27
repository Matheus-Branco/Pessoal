//Aula 11

let v1=10
let v2="10"
let v3=v1===v2
let v4={nome:"Matheus"}

console.log("Valor: " + v1 + " - Tipo: " + typeof(v1))
console.log("Valor: " + v2 + " - Tipo: " + typeof(v2))
console.log("Valor: " + v3 + " - Tipo: " + typeof(v3))
console.log("Valor: " + v4 + " - Tipo: " + typeof(v4))

//Aula 12

// const jogador1={Nome:"Matheus",energia:100,vidas:7,forca:90}
// const jogador2={Nome:"Miguel",energia:80,vidas:9,magia:90}
// const jogador3={...jogador1,...jogador2}


// console.log("n1: " + n1)
// console.log("n2: " + n2)
// console.log(jogador3)
// console.log("Tipo de n3: " + typeof(n3))

// const soma=(v11,v21,v31)=>{
//     return v11+v21+v31
// }

// let valores=[1,5,4]

// console.log(soma(...valores))

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    console.log(element)
});

console.log(objs1)
console.log(objs2)

//Aula 13

    

//Aula 14



//Aula 15


