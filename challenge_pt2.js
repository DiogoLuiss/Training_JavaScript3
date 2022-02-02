//[X] Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números,
//e a função responde qual número é maior

const comparison_number = (Number1, Number2) => {

    if (Number1 > Number2) {

        console.log(`O primeiro numero é  ${Number1} que é maior que o segundo numero ${Number2}`)

    } else if (Number1 < Number2) {


        console.log(`O primeiro numero é ${Number1} que é menor que o segundo numero ${Number2}`)

    } else {
        console.log("valor igual")
    }
}
comparison_number(15, 50)

//[ ] A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos.
//A prefeitura deseja saber: - média do salário da população; 
//- média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo.
//- Faça isso usando uma função!


const people = [{

        Name: "Antonio Alves",
        Salary: 2500,
        children: 2,

    },

    {
        Name: " Diogo Luis",
        Salary: 3000,
        children: 1,

    },
    {
        Name: "Ingrid Alves ",
        Salary: 800,
        children: 4,

    },

    {
        Name: "Marcella Brito",
        Salary: 1250,
        children: 2,
    },

    {
        Name: "Victor Guerra",
        Salary: -300,
        children: 3,
    }
]


const Media_All = (people) => {

    let higher_salary = 0
    let average_salary = 0
    let average_children = 0

    for (let i = 0; i < people.length; i++) {

        let salary = people[i].Salary
        let children = people[i].children

        if (salary > higher_salary ) {higher_salary = salary

        }
        if (salary < 0) {

            console.log(`O salario maior é de ${higher_salary}`)
            console.log(`A media dos salarios ${average_salary/i}`)
            console.log(average_children)

        } else {
            average_salary= average_salary+  salary
            average_children= average_children + children
        }

    }

}



Media_All(people)