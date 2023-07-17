import { useRegister } from '../../hooks/useRegister';
import Styled from './styles';

import { useForm } from 'react-hook-form';


const FormRegister = () => {

    const { register, formState, handleSubmit } = useForm();

    const doRegister = useRegister();

    // const handleForm = ( data ) => {
    //     console.info( '==> Data del Form: ', data );
    // };

    console.info( '==> Estado del Formulario: ', formState );

    return (
        <>
            <Styled.FormRegisterStyle>
                <form onSubmit={ handleSubmit( doRegister ) }>
                
                    <input
                        name="username" 
                        className="input-text"
                        required type="text" 
                        placeholder="Username" 
                        {...register("username", { required:true })} 
                    />
                    <br />

                    <input 
                        name="email"
                        className="input-text" 
                        required type="email" 
                        placeholder="email" 
                        {...register("email", { required:true })}
                    />
                    <br />

                    <input 
                        name="password"
                        className="input-text" 
                        required type="password" 
                        placeholder="* * * * * * * *" 
                        {...register("password", { required:true })}
                     />
                    <br />
                    
                    <input 
                        className='submitButton' 
                        type="submit" 
                        value="Registrar"
                    />

                </form>
            </Styled.FormRegisterStyle>
        </>
    );
}

export default FormRegister;