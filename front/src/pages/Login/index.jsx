import Styled from '../../components/Title/styles';

import Title from "../../components/Title";
import MainImage from '../../components/MainImage';
import FormLogin from '../../components/FormLogin';


const Login = () => {

    return(
        <>
            <Styled.LogContain>
                
                <Title title='App de Gestión'/>

                <MainImage img='https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Background-PNG-Clip-Art-Image.png'/>

                <Title subtitle='Inicio de Sesión'/>

                <FormLogin />

                <h3 className='goToRegister'>¿No estás registrado aún?</h3>
                <a href="/register"> <h3 className='click-toRegister'>Click aqui para registrarte</h3> </a>

            </Styled.LogContain>
        </>
    )

}


export default Login;