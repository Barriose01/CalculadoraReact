import React from "react";
import Pantalla from "./Pantalla";
import Botones from "./Botones";

function Calculadora(){
    let [numeros,setNumeros] = React.useState({
        pantallaSuperior: 0,
        pantallaInferior: 0,
        signo: ""
    })
    return(
        <div className="Calculadora">
            <Pantalla nums = {numeros}></Pantalla>
            <Botones nums = {numeros} setNums = {setNumeros}></Botones>
        </div>
    )
}
export default Calculadora