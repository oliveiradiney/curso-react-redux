import React, { useState } from "react";
import IndiretaFilho from './IndiretaFilho'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    const[a,b] = [1,2]
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInfor(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)

        
    }
    return(
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span>{nerd ? 'verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInfor}></IndiretaFilho>
        </div>
    )
}