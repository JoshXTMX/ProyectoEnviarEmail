document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    console.log(email);

  //seleccionar los elemtnos de la interfaz
  const inputEmail = document.querySelector('#email');
  const inputAsunto = document.querySelector('#asunto');
  const inputMensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario');
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="submit"]');

  // Asignar eventos
  inputEmail.addEventListener('input', validar);
  inputAsunto.addEventListener('input', validar);
  inputMensaje.addEventListener('input', validar);

  btnReset.addEventListener('click', function(e){
    e.preventDefault();

    // reiniciar el objeto
    email.email = '';
    email.asunto = '';
    email.mensaje = '';

    formulario.reset();
    comprobarEmail();


  })


   function validar(e) {
    if (e.target.value.trim() === '') {
       mostrarAlerta('El campo email es obligatorio');
    } else {
        console.log('si hay algo...');
    }

     validarEmail(e.target.value);

     email [e.target.name] = e.target.value.trim().toLowerCase();
     
     // comprobar el objeto de email
     comprobarEmail ();

   }

   function mostrarAlerta(mensaje){
    // Generar alerta en HTML
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

    //inyectar el error al formulario
    formulario.appendChild(error);
   }

   function validarEmail(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    const resultado = regex.test(email)
    console.log(resultado);
   }

   function comprobarEmail () {
      if(Object.values(email).includes('')) {
      }

      else {
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disable = false;
      }

   
   }
     
    

});