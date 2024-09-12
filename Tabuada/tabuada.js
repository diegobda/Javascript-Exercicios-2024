// Exercício resolvido por Diego dos Santos
// GitHub: https://github.com/diegobda
// Este código faz parte dos exercícios de prática em JavaScript para aprimorar habilidades de programação.

// crie uma tabuada completa

function geraMultiplosDeUmNumero(numero) {
    console.log(
        `${numero * 1} - ${numero * 2} - ${numero * 3} - ${numero * 4} - ${numero * 5} 
        - ${numero * 6} - ${numero * 7} - ${numero * 8} - ${numero * 9} - ${numero * 10}`
    );

}


let numeroInicial = 4;
while (numeroInicial <= 10) {
    geraMultiplosDeUmNumero(numeroInicial)
    numeroInicial += 1;
}
