function realizarOperacion(evento,objProp){
    let resultadoOperacion = 0;
    let divisionPorCero = false;
    let signo = objProp.nums.signo;
    switch(signo){
        case "+":
            resultadoOperacion = Number(objProp.nums.pantallaSuperior) + Number(objProp.nums.pantallaInferior);
            break;
        case "-":
            resultadoOperacion = Number(objProp.nums.pantallaSuperior) - Number(objProp.nums.pantallaInferior);
            break;
        case "*":
            resultadoOperacion = Number(objProp.nums.pantallaSuperior) * Number(objProp.nums.pantallaInferior);
            break;
        case "/":
            if(Number(objProp.nums.pantallaInferior) === 0){
                alert("No puede dividir por cero (0)");
                divisionPorCero = true;
            }else{
                resultadoOperacion = Number(objProp.nums.pantallaSuperior) / Number(objProp.nums.pantallaInferior);
            }
            break;
        case "^":
            resultadoOperacion = Math.pow(Number(objProp.nums.pantallaSuperior),Number(objProp.nums.pantallaInferior));
            break;
        default:
            resultadoOperacion = Number(objProp.nums.pantallaInferior);
            break;
    }
    if(!divisionPorCero){
        signo = evento.target.id !== "="?evento.target.id:"";
    }else{
        signo = "";
    }
    objProp.setNums(()=>{
        return{
            pantallaSuperior: resultadoOperacion,
            pantallaInferior:0,
            signo:signo
        }
    })
    
    return resultadoOperacion;
}

function igual(evento,objProp){
    let resultado = realizarOperacion(evento,objProp);
    objProp.setNums(()=>{
        return{
            pantallaSuperior: 0,
            pantallaInferior:resultado,
            signo:""
        }
    })
}

function raizCuadrada(objProp){
    let resultado = 0;
    if(Number(objProp.nums.pantallaInferior) < 0){
       alert("No se puede obtener la raiz cuadrada de un numero negativo");
    }else{
        resultado = Math.sqrt(Number(objProp.nums.pantallaInferior));
    }
    objProp.setNums(()=>{
        return{
            pantallaSuperior:0,
            pantallaInferior:resultado,
            signo:""
        }
    })
}

function cambiarNumero(evento,objProp){
    let numeroNuevo = objProp.nums.pantallaInferior;
    if(objProp.nums.pantallaInferior === 0){

        if(evento.target.id !== "0"){
            numeroNuevo = evento.target.id === "."? numeroNuevo + evento.target.id:evento.target.id
        }
    }else{
        numeroNuevo = objProp.nums.pantallaInferior.toString().includes(".") && evento.target.id === "."? numeroNuevo: numeroNuevo + evento.target.id;
    }
    objProp.setNums((numAnterior)=>{
        return{
            ...numAnterior,
            pantallaInferior:numeroNuevo
        }
    })
}

function borrar(evento,objProp){
    if(evento.target.id === "C"){
        objProp.setNums(()=>{
            return{
                pantallaSuperior:0,
                pantallaInferior:0,
                signo:""
            }
        })
    }else{
        let numeroBorrado = 0;

        if(objProp.nums.pantallaInferior.length === 1 || objProp.nums.pantallaInferior === 0){
            numeroBorrado = 0
        }else{
            numeroBorrado = objProp.nums.pantallaInferior.slice(0,-1);
        }
        objProp.setNums((numeroAnterior)=>{
            return{
                ...numeroAnterior,
                pantallaInferior:numeroBorrado
            }
        })
    }
}
function negativo(objProp){
    let numeroEnPantalla = objProp.nums.pantallaInferior
    if(objProp.nums.pantallaInferior !== 0){
        numeroEnPantalla = objProp.nums.pantallaInferior * (-1);
        objProp.setNums((numeroAnterior)=>{
            return{
                ...numeroAnterior,
                pantallaInferior:numeroEnPantalla
            }
        })
    }
}

export  {realizarOperacion,igual,raizCuadrada,cambiarNumero,borrar,negativo}