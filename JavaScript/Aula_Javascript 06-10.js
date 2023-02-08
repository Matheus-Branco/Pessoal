//                                                                                  Aula 06

// let n1=1
// let n2=2

// console.log(n1!=n2)

// if(navigator.userAgent.match(/Android/i)
// || navigator.userAgent.match(/webOS/i)
// || navigator.userAgent.match(/Iphone|Ipad|Ipod/i)
// || navigator.userAgent.match(/BlackBerry/i)
// || navigator.userAgent.match(/Windows Phone/i)
// || navigator.userAgent.match(/Opera Mini/i)
// || navigator.userAgent.match(/IEMobile/i)
//     ){
//         console.log("Celular")
//     }else{
//         console.log("PC")
//     }

// let nome="Matheus"

// {
//     let siglacurso="JS"
//     console.log(siglacurso)
// }

// const curso=()=>{
//     let curso="Javascript"
//     console.log(curso)
// }

// curso()

//                                                                                  Aula 07

//&& || !

// let n1,n2,n3,n4
// n1=10
// n2=5
// n3=15
// n4=2

// console.log((n1>n2)&&(n1>n3))

// console.log((n1>n2)||(n1>n3))

// console.log(!(n1>n2||n1>n3))

// if (n1>n2) {
//     console.log(n1 + " maior que " + n2)
// }else{
//     console.log(n1 + " menor que " + n2)
// }

// if ((n1>n2) && (n3>n4)) {
//     console.log("verdadeiro")
// }else{
//     console.log("falso")
// }

// if (!(n1>n2) && (n3>n4)) {
//     console.log("verdadeiro")
// }else{
//     console.log("falso")
// }

//                                                                                  Aula 08

// let n1=10
// let n2=11

// let res=n1 & n2

// console.log(res)

// let n1_=11
// let n2_=14

// let res_=n1_ | n2_

// console.log(res_)

// let n3=13
// let n4=14

// let res1=n3^n4

// console.log(res1)

// let n5=10

// let res2 = n5 << 1 //multiplica por 2 e <<<< multiplica por 4

// console.log(res2)

// let n6=30

// let res3 = n6 >> 1 // divide por 2

// console.log(res3)

//                                                                                  Aula 09

// let n=10

// n++

// console.log(n)

// let n1=10

// console.log(n1++)

// let n2=10

// console.log(++n2)

// console.log(n2)

// let n3=10
// let x=-n3

// console.log(x)

// let n7=10
// let n8=20

// console.log(n7 + "" + n8)

//                                                                                  Aula 10

let num=10

let res=num%2

if (res==0) {
    console.log("Par")
}else{
    console.log("Impar")
}

//0 = false %% 1 = true
// ? faz com que a primeira opção (no caso o Par) seja true e a segunda (Impar) seja False
// Teste lógico ? if true : if false

let num1=10
                              
res=(num%2 ? "Par" : "Impar")
console.log(res)              

let num2=10
let num3=5
res=(num2 > num3 ? "Verdadeiro" : "Falso")
console.log(res)

let st="A"
res=(st == "A" ? "Ativo" : "Inativo")
console.log(res)
