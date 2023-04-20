import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  
  const [pontos,setPontos] = useState(0);
  const [pontosComp,setPontosComp] = useState(0);
  const [empate,setEmpate] = useState(0);
  const [resp,setResp] = useState(null);
  const [guardaResp,setGuardaResp] = useState(null);
  const [guardaComp,setGuardaComp] = useState(null);
  const [comp,setComp] = useState(null);
  var teste;
  var numero_aleatorio;
 
  const GeraNumero = () =>{
    numero_aleatorio = Math.floor(Math.random() * 3);
    VerificaResultado();
  
    
  }

  
  
  //0 - Pedra; 1- Papel; 2-Tesoura
  const contador = () => {
    
    GeraNumero();
    setGuardaResp(resp);
    setGuardaComp(comp);
    console.log(comp);
    
    
    if(comp == 'Pedra' && resp == 'Papel'){
      
      setPontos(pontos + 1);
     
    
    }else if(comp == 'Papel' && resp== 'Tesoura'){
      setPontos(pontos + 1);
     
     
      
     
    }else if(comp == 'Tesoura' && resp== 'Pedra'){
      setPontos(pontos + 1);
      
     
      
    }else if(comp == resp){
      setEmpate(empate + 1);
    
    }
    else{
      setPontosComp(pontosComp + 1);
     
    }

    
  
    var teste='';
    setResp(teste);
    
   
  }

  const VerificaResultado = () =>{
   if(numero_aleatorio == 0){
      teste = 'Pedra';
      setComp(teste);
   }else if(numero_aleatorio == 1){
       teste = 'Papel';
        setComp(teste);
   }else{
        teste = 'Tesoura';
        setComp(teste);
   }
 }

  const reset = () =>{
    var zerar = 0;
    setPontos(zerar);
    setPontosComp(zerar);
    setEmpate(zerar);
    teste = '';
    setComp(teste);
    setResp(teste);
    setGuardaResp(teste);
    setGuardaComp(teste);
    
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title} >Pedra, Papel e Tesoura</Text>
      <TextInput placeholder='Escreva algo: ' onChangeText={resp => setResp(resp) } value={resp}  
      
      style={styles.input} reset></TextInput>
      <StatusBar style="auto" />

      <View style={styles.button} >
         <button style={styles.teste}
        onClick={contador}>Jogar</button>
        

        <View style={styles.pontos}>
         
         <Text style={styles.pontoTitle}>Pontos:</Text>
         <Text style={styles.pontuacao}>{pontos}</Text>
         <Text style={styles.pontoTitle}>Empates:</Text>
         <Text style={styles.pontuacao}>{empate}</Text>
         <Text style={styles.pontoTitle}>Computador:</Text>
         <Text style={styles.pontuacao}>{pontosComp}</Text>

        </View>

        <button style={styles.teste}
        onClick={reset}>Resetar</button>

        <View style={styles.pontos}>
          <Text style={styles.pontoTitle}>Escolha:</Text>
          <Text style={styles.pontuacao}>{guardaResp}</Text>
          <Text style={styles.pontoTitle}>Computador:</Text>
          <Text style={styles.pontuacao}>{guardaComp}</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:45,
  },
  title: {
    color:'blue',
    fontSize:20,
    fontWeight:500,
    color: '#1E90FF',
  },
  pontoTitle:{
    fontSize:18,
    fontWeight:500,
    color: '#1E90FF',
    marginLeft:5,
  },
  pontuacao:{
    fontSize:18,
    fontWeight:500,
    marginLeft:5,
  },
  input: {
    height:30,
    width:'50%',
    color:'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    fontSize:18,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 10,
    margin:25,
  },
  button:{
    flex: 1,
    width:'50%',
  },
  pontos: {
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  teste:{
    fontSize: 18,
    paddingTop:-25,
    marginRight: '5px',
    backgroundColor: '#000',
    color: 'white',
    width:'100%',
    height:35,
    textAlign:'center',
    justifyContent:'center',
    top:55,
    border:'none',
    borderRadius:5,
    fontWeight:600,
  }
  
});


