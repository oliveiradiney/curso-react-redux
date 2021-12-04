import React from "react";

export default (props) => {
    const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        <strong>Valor minimo</strong> {props.min}
      </p>
      <p>
        <strong>Valor maximo</strong> {props.max}
      </p>
      <p>
        <strong>Valor Escolhido</strong> {props.max}
      </p>
    </div>
  );
};
