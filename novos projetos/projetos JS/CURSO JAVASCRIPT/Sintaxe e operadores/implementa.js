     //Tentando fazer de uma outra forma para funcionar
     
     var num1 = document.querySelector('input#n1');
     var num2 = document.querySelector('input#n2');
     var resp = document.querySelector('div#resp'); 
     

function verificar () {
     
    var num1=Number(n1.value)
     var num2=Number(n2.value) 
     //saoIguais = num1===num2;
   // return saoIguais ? "São Iguais" : "não são iguais" ;
    var soma = num1 + num2;
    document.write (`A soma de ${num1} e ${num2} é ${soma}`)
    
    switch (verificar) {
        case num1 == num2:
            document.write(`são iguais`)
        break;
        case num1 != num2:
            document.write(`são diferentes`) 
        break;
        default:
        document.write(`continua`)
    }
        }
       
    
     
 



