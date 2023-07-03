import Styled from '../../components/Title/styles';

import Form from "../../components/Form";
import Title from "../../components/Title";
import MainImage from '../../components/MainImage';


const Login = () => {

    return(
        <>
            <Styled.LogContain>
                <Title title='App de Gestión'/>

                <MainImage img='https://cdn.icon-icons.com/icons2/3446/PNG/512/account_profile_user_avatar_icon_219236.png'/>

                <Title subtitle='Inicio de Sesión'/>

                <Form>

                </Form>

            </Styled.LogContain>
        </>
    )

}


export default Login;