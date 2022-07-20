$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contacto']").validate({
      //Reglas de validacion
      rules: {
        
        fname:{
          required: true
        },

        lname: {
          required: true
        },

        age:{
            required: true,
            min:18
        },

        email: {
          required: true,
          email: true
        },

       
      },
      // Mensajes especificos de error de validacion
      messages: {
        fname: {
          required:"Por favor, introduzca su nombre"},
        lname: {
          required:"Por favor, introduzca su apellido",
        },
        age: {
          required:"Por favor, introduzca su edad",
          min: "Tiene que ser mayor de edad"
        },
        email: {
          required:"Por favor, introduce una dirección de correo",
        },
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });