import React, { useState } from 'react'
import './Jogo.css'


export default function Jogo() {
   
  const [pontos,setPontos] = useState(0);
  const [pontosComp,setPontosComp] = useState(0);
  const [empate,setEmpate] = useState(0);
  const [resp,setResp] = useState('');
  const [guardaResp,setGuardaResp] = useState(null);
  const [guardaComp,setGuardaComp] = useState(null);
  const [comp,setComp] = useState('') ;
  var verifica;
  var numero_aleatorio;

  
   function GeraNumero(){
    numero_aleatorio = Math.floor(Math.random() * 3);
   }

  function VerificaResultado(){
    GeraNumero();
     console.log(numero_aleatorio);
     setComp(verifica);
    if(numero_aleatorio == 0)
    {
      verifica = 'Pedra';
      setComp(verifica); 
      comp;
    }else if(numero_aleatorio == 1)
    {
      verifica = 'Papel';
      setComp(verifica);
      comp;
    }else
    {
      verifica = 'Tesoura';
      setComp(verifica);
      comp;
    }
    
    console.log('11',comp);
    console.log(verifica);
    setComp(verifica);
    console.log('11',comp);
  }

  function contador(){
    VerificaResultado();
    setGuardaResp(resp);
    setGuardaComp(comp);
     console.log('cont -',comp)
   if(resp == 'Papel' && comp == 'Pedra')
   {
    setPontos(pontos + 1);
   }
   else if(resp == 'Tesoura' && comp == 'Papel')
   {
    setPontos(pontos + 1);
   }
   else if(resp == 'Pedra' && comp == 'Tesoura')
   {
    setPontos(pontos + 1);
   }
   else if(resp == comp)
   {
    setEmpate(empate + 1);
   }
   else
   {
    setPontosComp(pontosComp + 1);
   }
  verifica = '';
  setResp(verifica);
   
  }

  function Reset(){
    var zerar = 0;
    setPontos(zerar);
    setEmpate(zerar);
    setPontosComp(zerar);

    var teste = '';
    setComp(teste);
    setResp(teste);
    setGuardaComp(teste);
    setGuardaResp(teste);
  }

    
  return(
    <div className='container'>
    <h1 className='title'>Pedra, Papel e Tesoura, Largato e spoke</h1>
    <input type="text" className='input' placeholder='Escreva algo:' value = {resp} onChange={(e) => setResp(e.target.value)}  />
      
      <div>
        <button className='button' onClick={contador}>Jogar</button>
      </div>

      <div className='pontos'>
            <span className='pontoTitle'>Pontos:</span>
            <span className='pontuacao'>{pontos}</span>
            <span className='pontoTitle'>Empates:</span>
            <span className='pontuacao'>{empate}</span>
            <span className='pontoTitle'>Computador:</span>
            <span className='pontuacao'>{pontosComp}</span>
      </div>

      <div>
        <button className='button' onClick={Reset}>Restaurar</button>
      </div>

      <div className='pontos'>
       <span className='pontoTitle'>Sua escolha:</span>
       <span className='pontuacao'>{guardaResp}</span>
       <span className='pontoTitle'>Computador:</span>
       <span className='pontuacao'>{guardaComp}{verifica}</span>
      </div>
    </div>

   
  );

}
