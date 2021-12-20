import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.quandoClicar
    return(
        
        <div>
            <div>Filho</div>
            <button
                onClick={
                _ => cb('Joao', 53, true)
                }
            >
                Fornercer informações
            </button>
        </div>
    )
}