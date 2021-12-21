import './App.css';
import React from 'react';

import Card from './components/layout/Card'

import Mega from './components/mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import './components/comunicacao/DiretaPai'
import Usuarioinfo from './components/condicional/Usuarioinfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import ListaProdutos from './components/repeticao/ListaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Aleatorio from './components/basicos/Aleatorio'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Cards'>
                <Card titulo='#13 - Mega' color='#B9006E'>
                   <Mega qtde={8}></Mega>
                </Card>

                <Card titulo='#12 - Contador' color='#424242'>
                   <Contador numInicial={10}></Contador>
                </Card>

                <Card titulo='#11 - Componente Controlado(Input)' color='#E45F56'>
                    <Input />
                </Card>

                <Card titulo='#10 - Comunicação Indireta' color='#0000FF'>
                    <IndiretaPai></IndiretaPai>
                </Card>
                
                <Card titulo='#09 - Comunicação Direta' color='#59323C'>
                  <DiretaPai></DiretaPai>
                </Card>

                <Card titulo='#08 - Renderização Condicional' color='#54b825'>
                    <ParOuImpar numero={6}/>
                    <Usuarioinfo usuario={{ nome: 'Fernando' }} />
                    {/*<Usuarioinfo usuario={{ email: 'fer@nando.com'}} />*/}
                </Card>

                <Card titulo='#07 - Desafio Repeticao' color='#25b8b0'>
                    <ListaProdutos />
                </Card>

                <Card titulo='#06 - Repeticao' color='#a86c5d'>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo='#05 - Componente com filhos' color='#00C8f8'>
                    <Familia sobrenome='Ferreira'>
                        <FamiliaMembro nome='Diney' />
                        <FamiliaMembro nome='Debora'/>
                        <FamiliaMembro nome='Arthur'/> 
                    </Familia>
                </Card>

                <Card titulo='#04 - Desafio Aleatório' color='#080'>
                    <Aleatorio min={1} max={6} />
                </Card>

                <Card titulo='#03 - Fragmento' color='#c58646ccF'>
                    <Fragmento />
                </Card>

                <Card titulo='#02 - Com Pârametro' color='#E8B71A'>
                    <ComParametro 
                        titulo="situação do aluno" 
                        aluno="Pedro" nota="9.3"
                    />
                </Card>

                <Card titulo='#01 - Primeiro Componente' color='#588C73'>
                    <Primeiro></Primeiro>
                </Card>
            </div>
           
        </div>
    )
}