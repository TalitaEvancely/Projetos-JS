 var jog1=0;
 var jog2=0;
 var placar;

//if ternário
jog1 != -1 && jog2 != -1 ? console.log('Os jogadores são válidos'):
console.log('jogadores inválidos');
//if
 if (jog1>0){
     console.log('Jogador 1 marcou  ponto')
     placar = jog1 >jog2;
 }else if(jog2>0){
     console.log('O jogador 2 marcou  ponto')
     placar = jog2>jog1;
 }
 else{
     console.log('Ninguem marcou ponto')
 }
  switch (placar) {
    case placar = jog1>jog2:
    console.log('O jogador 1 ganhou!')
    break;
    case placar = jog2>jog1:
    console.log('O jogador 2 ganhou!')
    break;
    default:
        console.log('Ninguem ganhou')
    }
