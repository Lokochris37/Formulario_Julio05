let nombre, correo, mensaje;
let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    console.log("Formulario recibido")
    e.preventDefault();
    LeerDatos();
    
})

function LeerDatos(){
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.querySelector("textarea").value
    ValidarData(nombre, correo, mensaje)
    guardarLocalStorage(nombre,correo,mensaje)
    form.reset();
}

function ValidarData (nombre, correo, mensaje){
    if(nombre.length==0 || correo.length==0 || mensaje.length==0 ){
        swal("Error","No rellenaste un campo","error");
    }
    else
        function guardarLocalStorage(nombre,correo,mensaje){
            localStorage.setItem("Nombre",nombre);
            localStorage.setItem("Correo",correo);
            localStorage.setItem("Mensaje",mensaje);
            ListaData()  
        }

        function ListaData() {
            let nombreUs = localStorage.getItem("Nombre")
            let correoUs = localStorage.getItem("Correo")
            let mensajeUs = localStorage.getItem("Mensaje")
            swal({  title: nombre, text: "Tu mensaje ha sido enviado con exito!", icon: "success",})
        }
        
}

