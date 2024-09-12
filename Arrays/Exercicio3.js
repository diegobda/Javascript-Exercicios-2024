// Exercício resolvido por Diego dos Santos (62 )9 9801-8126
// GitHub: https://github.com/diegobda
// Este código faz parte dos exercícios de prática em JavaScript para aprimorar habilidades de programação.

// Identificar o numero maior e menor em Arrays

function identificarMaiorOuMenorNumArray(lista) {

    if(lista.length === 0) {
        console.log("Informe uma lista nao vazia");
        return;
    }
   let maiorElemento = lista[0];
   let menorElemento = lista[0];

   for (let posicaoElemento = 0; posicaoElemento < lista.length;
    posicaoElemento +=1
   ) {
    //tentando achar menor elemento
    if(lista[posicaoElemento] < menorElemento) {
        menorElemento = lista[posicaoElemento];
    }
        //tentando achar maior elemento
        if(lista[posicaoElemento] > maiorElemento) {
            maiorElemento = lista[posicaoElemento];
       }
   }

   console.log(`O menor elemento e ${menorElemento}`)
   console.log(`O menor elemento e ${maiorElemento}`)

   
}

identificarMaiorOuMenorNumArray ([13,5,2,8,3,33,4,42,42.5,-0]);


