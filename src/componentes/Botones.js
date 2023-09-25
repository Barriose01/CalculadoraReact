import React from "react";
import {realizarOperacion,igual,raizCuadrada,cambiarNumero,borrar,negativo} from "./funciones/funciones";

function Botones(props){
    return(
        <div className="BloqueBotones">
            <div className="FilaBotones1 FilasBotones">
                <div id="√" className="BtnRaiz Boton" onClick={()=>{(raizCuadrada(props))}}>√</div>
                <div id="^" className="BtnPotencia Boton" onClick={(e)=>{realizarOperacion(e,props)}}>^</div>
                <div id="C" className="BtnLimpiar Boton" onClick={(e)=>{borrar(e,props)}}>C</div>
                <div id="←" className="BtnBorrar Boton"  onClick={(e)=>{borrar(e,props)}}>←</div>
            </div>
            <div className="FilaBotones2 FilasBotones">
                <div id="7" className="Btn7 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>7</div>
                <div id="8" className="Btn8 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>8</div>
                <div id="9" className="Btn9 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>9</div>
                <div id="/" className="BtnDivision Boton" onClick={(e)=>{realizarOperacion(e,props)}}>/</div>
            </div>
            <div className="FilaBotones3 FilasBotones">
                <div id="4" className="Btn4 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>4</div>  
                <div id="5" className="Btn5 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>5</div>  
                <div id="6" className="Btn6 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>6</div>  
                <div id="*" className="BtnMultiplicacion Boton" onClick={(e)=>{realizarOperacion(e,props)}}>*</div>  
            </div>
            <div className="FilaBotones4 FilasBotones">
                 <div id="1" className="Btn1 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>1</div>  
                 <div id="2" className="Btn2 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>2</div>  
                 <div id="3" className="Btn3 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>3</div>  
                 <div id="-" className="BtnResta Boton" onClick={(e)=>{realizarOperacion(e,props)}}>-</div>  
            </div>
            <div className="FilaBotones5 FilasBotones">
                <div className="BtnNegativo Boton" onClick={()=>{(negativo(props))}}>-X</div>  
                 <div id="0" className="Btn0 Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>0</div>  
                 <div id="." className="BtnPunto Boton" onClick ={(e)=>{cambiarNumero(e,props)}}>.</div>  
                 <div id="+" className="BtnSuma Boton" onClick={(e)=>{realizarOperacion(e,props)}}>+</div>  
            </div>
            <div className="FilaBotones6 FilasBotones">
                <div id="=" className="BtnIgual Boton" onClick={(e)=>{igual(e,props)}}>=</div>  
            </div>

        </div>
    )
}

export default Botones