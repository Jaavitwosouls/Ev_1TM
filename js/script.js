document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".fomrulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja_trasera_login = document.querySelector(".caja_trasera-register");
var caja_trasera_register = document.querySelector(".caja_trasera-register");


function iniciarSesion(){
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "580px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
}

function register(){
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "920px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
}


function checkRut(rut) {

    var valor = rut.value.replace('.','');

    valor = valor.replace('-','');
    

    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    

    rut.value = cuerpo + '-'+ dv
    

    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    

    suma = 0;
    multiplo = 2;
    

    for(i=1;i<=cuerpo.length;i++) {
    

        index = multiplo * valor.charAt(cuerpo.length - i);
        

        suma = suma + index;
        

        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
    }
    

    dvEsperado = 11 - (suma % 11);
    

    dv = (dv == 'K')?10:dv;
    v = (dv == 0)?11:dv;
    

    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    

    rut.setCustomValidity('');
}








var Fn = {
// Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
    rutCompleto = rutCompleto.replace("‐","-");
    if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
    var tmp   = rutCompleto.split('-');
    var digv  = tmp[1]; 
    var rut   = tmp[0];
    if ( digv == 'K' ) digv = 'k' ;
    
    return (Fn.dv(rut) == digv );
    },
    dv : function(T){
    var M=0,S=1;
    for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
    return S?S-1:'k';
    }
}

$("#btnvalida").click(function(){
    if (Fn.validaRut( $("#txt_rut").val() )){
    $("#msgerror").html("El rut ingresado es válido :D");
    } else {
    $("#msgerror").html("El Rut no es válido :'( ");
    }
});






const form = document.getElementById("tabla__registro");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let tabla__registroData = new FormData(form);
    let tabla__registroRef = document.getElementById("tabla__registro")
})