/*Atividade
Crie uma função que recebe dois números como parâmetros.
- 1a parte: Confira se os números são iguais.
- 2a parte: Confira se a soma dos números é maior que 10 ou menor que 20.
- Retorne uma string dizendo "Os números num1 e num2 não/são iguais. Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.*/
          
     var num1 = document.querySelector('input#n1');
     var num2 = document.querySelector('input#n2');
     var resp = document.querySelector('div#resp'); 
     

function verificar () {
     
    var num1=Number(n1.value)
     var num2=Number(n2.value) 
    //1a parte:
    if (num1==num2){
        document.write(`${num1} e ${num2} são . `)
    } else{
        document.write(`${num1} e ${num2} não são iguais.`)
    }
    //2a parte:
    const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	document.write ( ` Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`);

      
    
        }
       
    
     
 



