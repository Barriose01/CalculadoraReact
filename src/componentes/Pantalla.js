import React from "react";

function Pantalla(props){
    return(
        <div className="BloquePantalla">
            <div className="PantallaSuperior">{props.nums.pantallaSuperior} {props.nums.signo && props.nums.signo}</div>
            <div className = "PantallaInferior">{props.nums.pantallaInferior}</div>
        </div>
    )
}

export default Pantalla