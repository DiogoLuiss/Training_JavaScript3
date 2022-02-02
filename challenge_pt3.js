//[X] Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um investimento. 

const interest_rate = (Fees, capital, time) => {

    let calc1 = (`${capital * time}`)
    let calc2 = (`${ Fees /calc1    }`)
    let percentage = (100)

    console.log(`${calc2*percentage}% A.M. `)

}

let Fess = 600
let Capital = 2000
let During_time = 12

interest_rate(Fess, Capital, During_time)


//[ ] Escreva um programa onde, você cria uma função geradora de desconto. 

//A função aceita 4 parâmetros (Nome do cliente, valor total da compra, 
//um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)

//Os descontos funcionam da seguinte forma: 

//Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto!!

//Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto   !!

//Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%  !!

//Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto  !!

//- Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto !!

//Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

//Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto     

//Se NÃO é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto 

//Se NÃO é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 10% 

//Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 10% de desconto - Se NÃO é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 5% de desconto 

//Se NÃO é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => SEM DESCONTO

//A função deve imprimir na tela: 

//Se o cliente recebeu desconto, imprima na tela um agradecimento pela compra, o valor total sem desconto, o valor total com desconto e a porcentagem de desconto que ele recebeu.       

//Se o cliente não recebeu desconto, imprima na tela um agradecimento pela compra, o valor total da sua compra e um cupom de desconto. Esse cupom deve ser um valor aleatório entre 10 e 20% para a próxima compra.



const descont = (Name, amount, part, first_purchase) => {

    if (first_purchase == "sim" && part == 1 && amount >= 1000) {

        console.log(`Parabens ${Name} você recebeu o desconto de 30% em sua compra de ${amount}$, portanto você pagou ${amount*0.70}$  agradecemos a preferencia.`)

    } else if (first_purchase == "sim" && part == 1 && amount < 1000 && amount > 500) {

        console.log(`Parabens ${Name} você recebeu o desconto de 25% em sua compra de ${amount}$, portanto você pagou ${amount * 0.75}$  agradecemos a preferencia.`)

    } else if (first_purchase == "sim" && part == 1 && amount <= 500) {     
        console.log(`Parabens ${Name} você recebeu o desconto de 20% em sua compra de ${amount}$, portanto você pagou ${amount*0.80}$  agradecemos a preferencia.`)
    } 

    else if (first_purchase == "sim" && part > 1 && amount >= 1000) {
        console.log(`Parabens ${Name} você recebeu o desconto de 20% em sua compra de ${amount}$, portanto você pagou ${amount*0.80}$  agradecemos a preferencia.`)
    } 

    else if (first_purchase == "sim" && part > 1 && amount <= 1000 && amount >= 500) {
        console.log(`Parabens ${Name} você recebeu o desconto de 15% em sua compra de ${amount}$, portanto você pagou ${amount*0.85}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "sim" && part > 1 && amount <= 500) {
        console.log(`Parabens ${Name} você recebeu o desconto de 10% em sua compra de ${amount}$, portanto você pagou ${amount*0.90}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part == 1 && amount >= 1000) {
        console.log(`Parabens ${Name} você recebeu o desconto de 20% em sua compra de ${amount}$, portanto você pagou ${amount*0.80}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part == 1 && amount >= 500 && amount < 1000) {
        console.log(`Parabens ${Name} você recebeu o desconto de 15% em sua compra de ${amount}$, portanto você pagou ${amount*0.85}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part == 1 && amount <= 500) {
        console.log(`Parabens ${Name} você recebeu o desconto de 10% em sua compra de ${amount}$, portanto você pagou ${amount*0.90}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part > 1 && amount >= 1000) {
        console.log(`Parabens ${Name} você recebeu o desconto de 10% em sua compra de ${amount}$, portanto você pagou ${amount*0.90}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part > 1 && amount <= 1000 && amount > 500) {
        console.log(`Parabens ${Name} você recebeu o desconto de 5% em sua compra de ${amount}$, portanto você pagou ${amount*0.95}$  agradecemos a preferencia.`)
    }
    
    else if (first_purchase == "não" && part > 1 && amount <= 500) {

        let random = Math.floor(Math.random() * (20 - 10 + 1)) + 10;

        console.log(`${Name} você não recebeu desconto em sua compra de ${amount}$, portanto você pagou ${amount}$  agradecemos a preferencia, contudo na proxima compra recebera um valor de ${random}% em promoção`)
    }

}

descont("Diogo",400, 5, "não")
