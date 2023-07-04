import FormRegister from "../../components/FormRegister";
import Title from "../../components/Title";
import Styled from '../../components/Title/styles';

const Register = () => {

    return(
        <>
            <Styled.LogContain>
                <Title title='App de Gestión'/>
                <Title subtitle='Registro de Usuario'/>

                <FormRegister />

                <h3 className='goToRegister'>¿Ya estas registrado?</h3>
                <a href="/login"> <h3 className='click-toRegister'>Click aqui ingresar</h3> </a>

            </Styled.LogContain>
        </>
    )

}


export default Register;