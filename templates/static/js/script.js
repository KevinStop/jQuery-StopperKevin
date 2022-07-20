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

       
      
  });