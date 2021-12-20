import './Contador.css'
import React, {Component} from "react"

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends Component{

    state = {
        numero: this.props.numInicial || 0,
        passo: this.props.passoInicial || 5,
    };
    
    /*
    constructor(props){
        super(props)

        this.inc = this.inc.bind(this)

    }*/

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }
    dec = () =>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    /*
    inicializar o estado pelo construtor
    constructor(props){
        super(props)

        
        this.state = {
            numero: props.numInicial
        }
    }*/
    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
    }
    render(){
        return(
            <div className='Contador'>
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                <Botoes setInc={this.inc} setDec={this.dec}/>
            </div>
        )
    }
}

export default Contador