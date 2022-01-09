

function verificar() 
        //Agora funciona!!!
        {
          var ps = document.querySelector('#txtpais')
          var ps2 = ps.value 
          var resp = document.getElementById('p')
          
              if (ps2 =='Brasil' || ps2 == 'brasil' )
              {
                resp.textContent = 'Você é brasileiro'
            }
            else{
              resp.textContent = 'você é estrageiro'
                }
           
        }