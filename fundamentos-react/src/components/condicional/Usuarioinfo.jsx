import React from 'react'
import If, {Else} from './If'
export default props => {
    const usuario = props.usuario || {}
    return(
        <div>
            {/*<If test={usuario && usuario.nome}>
                Sejam bem vindo <strong>{ usuario.nome }</strong>!
            </If>
            <If test={!usuario || !usuario.nome}>
                Sejam bem vindo <strong>Amigão</strong>!
            </If>
            */}
            <If test={usuario && usuario.nome}>
                Sejam bem vindo <strong>{ usuario.nome }</strong>!
                <Else>
                    Sejam bem vindo <strong>Amigão</strong>!
                </Else>
            </If>
            


        </div>
    )
}