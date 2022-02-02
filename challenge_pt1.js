//[X] Escreva um programa onde, você chame uma função enviando um número, 
//a função deve imprime na tela os número de 1 até o número que você enviou


const account = (Number) => {




    for (let i = 1; i <= Number; i++) {

        console.log(i)


        if (Number == i) {
            console.log("Finish")
        }
    }

}

account(10)


//[X] Escreva um programa onde, você chame uma função enviando um número
//(aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.


const multiplication_table = (Number) => {

    for (let i = 1; i <= 10; i++) {

        console.log(`${Number} * ${i} = ${Number * i}`)

    }

}

multiplication_table(50000)


//[X] Escreva um programa onde, você chame uma função, e ela diga a hora exata! ]

const hours = () => {
    let date = new Date()
    let current_hours = date.getHours()
    let current_minutes = date.getMinutes()
    let current_seconds = date.getSeconds()

    console.log(`São ${current_hours}h${current_minutes}m:${current_seconds}s`)
}

hours()

//[X] Escreva um programa onde, você chame uma função, e ela diga que ano estamos! 

const year = () => {
    let date = new Date()
    let current_year = date.getFullYear()
    console.log(`Estamos no ano de ${current_year } `)

}

year()