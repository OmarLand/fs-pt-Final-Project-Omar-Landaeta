export const login = {
    email: {
        validation : {
            required : true 
        }
    },
    username : {
        validation: {
            required : true, 
        }
    },
    password : {
        validation : {
            required : true,
            minLength: 4,
        }
    },
    errors : {
        required  : 'Este campo es obligatorio.',
        minLength : 'Debe contener al menos 4 caracteres.'
    }
}