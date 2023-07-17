import { useLogOut } from '../../hooks/useLogOut';
import Styled from './styles';

const ModalContent = ( ) => {

    const { logout } = useLogOut();

    return(

        <>
            <Styled.NavBarStyle>
                <p>¿Desea cerrar la sesión del App de Gestión?</p>

                <form>
                    <input 
                        className='button-logout' 
                        type="submit" 
                        value="Sip!" 
                        onSubmit={ logout }
                    />

                    <input
                        name="logout" 
                        className='button-logout' 
                        type="button" 
                        value="Nop!" 

                    />
                </form>

            </Styled.NavBarStyle>
        </>

    );
}


export default ModalContent;