import './App.css';
import React from 'react';

import Card from './components/layout/Card'

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


export default () =>{
    return(
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className='Cards'>
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