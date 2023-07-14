import Styled from './styles.jsx';
import { login } from '../../misc/templates.js';
import { useLogin, useUser } from '../../hooks'; // Gestiono el login

import { useForm } from 'react-hook-form';
import { useEffect } from 'react';


const FormLogin = () => {

    const { register, formState, handleSubmit } = useForm();
    const doLogin  = useLogin(); // Para el Login
    const { data } = useUser();

    useEffect( ()=>{
        console.info('> useEffect User data ==> ', data)
    }, [data]);

    // const handleForm = ( data ) => {
    //     console.info('Form data: ===>', data);
    //     mutate( data );
    // }
    // console.info('Form State: ===> ', formState );
    
    const { errors } = login;

    return (
        <>
            <Styled.Form>
                <form onSubmit={ handleSubmit(doLogin) }>
                    <input className="input-text" required type="email" placeholder="e-mail" {...register("email", { required: true })} />
                    <br />
                    <p> { formState.errors && errors[ formState.errors?.email?.type ] } </p>

                    <input className="input-text" required type="password" placeholder="* * * * * * * *" {...register("password", { required: true, minLength: 4 } ) } />
                    <p> { formState.errors && errors[ formState.errors?.password?.type ] } </p>
                    <br />

                    <input className='submitButton' type="submit" value="Entrar"/>
                </form>
            </Styled.Form>
        </>
    );
}

export default FormLogin;