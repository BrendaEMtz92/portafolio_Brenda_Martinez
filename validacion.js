const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const mensaje = document.querySelectorAll("textarea");


const expresiones = {
	nombre:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    asunto:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	mensaje: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
}

const campos = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
}


const validarFormulario = (e) =>{
   switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
        case "email":
            validarCampo(expresiones.email, e.target, "email");
           
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto");
        break;

        case "mensaje":
        validarCampo(expresiones.mensaje, e.target, "mensaje");
        break;
   }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById( `input-container__${campo}`).classList.remove("input-container-incorrecto");
        document.getElementById( `input-container__${campo}`).classList.add("input-container-correcto");
        document.querySelector(`#input-container__${campo} i`).classList.add("fa-circle-check");
        document.querySelector(`#input-container__${campo} i`).classList.remove("fa-circle-xmark");
        document.querySelector(`#input-container__${campo} .formcontato__input-error`).classList.remove("formcontato__input-error-activo");
        campos[campo] = true;
    }else{
        document.getElementById( `input-container__${campo}`).classList.add("input-container-incorrecto");
        document.getElementById( `input-container__${campo}`).classList.remove("input-container-correcto");
        document.querySelector(`#input-container__${campo} i`).classList.add("fa-circle-xmark");
        document.querySelector(`#input-container__${campo} i`).classList.remove("fa-circle-check");
        document.querySelector(`#input-container__${campo} .formcontato__input-error`).classList.add("formcontato__input-error-activo");
        campos[campo] = false;
    }
    habilitarBoton();
}

inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
});


mensaje.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario);
    input.addEventListener("blur",validarFormulario);
});




function habilitarBoton(){
    if(campos.nombre && campos.email && campos.asunto && campos.mensaje){
        document.getElementById("btn").disabled = false;
    }else{
        document.getElementById("btn").disabled = true;
    }
}



formulario.addEventListener("sumbit", (e)=>{
    e.preventDefault();

    if(campos.nombre && campos.email && campos.asunto &&campos.mensaje){
       
        formulario.reset();
        
        document.getElementById("formcontato__mensaje-exito").classList.add("formcontato__mensaje-exito-activo");
        setTimeout(()=>{
        document.getElementById("formcontato__mensaje-exito").classList.remove("formcontato__mensaje-exito-activo");    
        }, 5000);

        document.querySelectorAll(".formulario__input-container-correcto").forEach((icono)=>{
            icono.classList.remove("formulario__input-container-correcto");
        });
    }else{
        document.getElementById("input-container__mensaje-validacion").classList.add("input-container__mensaje-validacion-activo")
    }
});


