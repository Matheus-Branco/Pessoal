let num = [5, 8, 10, 2]
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexPf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}

