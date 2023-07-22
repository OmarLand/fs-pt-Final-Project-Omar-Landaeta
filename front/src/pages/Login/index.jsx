import Styled from '../../components/Title/styles';

import Title from "../../components/Title";
import MainImage from '../../components/MainImage';
import FormLogin from '../../components/FormLogin';

import { Link } from 'wouter'


const Login = () => {

    return(
        <>
            <Styled.LogContain>
                
                <Title title='App de Gestión'/>

                <MainImage img='https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Background-PNG-Clip-Art-Image.png'/>

                <Title subtitle='Inicio de Sesión'/>

                <FormLogin />

                <h3 className='goToRegister'>¿No estás registrado aún?</h3>

                <Link href="/register"> <a> <h3 className='click-toRegister'>Click aqui para registrarte</h3> </a>  </Link>

            </Styled.LogContain>
        </>
    )

}


export default Login;