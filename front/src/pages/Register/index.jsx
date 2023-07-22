import FormRegister from "../../components/FormRegister";
import Title from "../../components/Title";
import Styled from '../../components/Title/styles';

import { Link } from 'wouter';

const Register = () => {

    return(
        <>
            <Styled.LogContain>
                <Title title='App de Gestión'/>
                <Title subtitle='Registro de Usuario'/>

                <FormRegister />

                <h3 className='goToRegister'>¿Ya estas registrado?</h3>

                <Link href="/login"><a><h3 className='click-toRegister'>Click aqui para registrarte</h3></a></Link>
                {/* <a href="/login"> <h3 className='click-toRegister'>Click aqui ingresar</h3> </a> */}

            </Styled.LogContain>
        </>
    )

}


export default Register;