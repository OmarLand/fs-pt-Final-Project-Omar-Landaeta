import Styled from './styles';

import { useLogOut } from '../../hooks/';

const ModalContent = ( ) => {

    const doLogOut = useLogOut();;

    return(

        <>
            <Styled.NavBarStyle>
                <p>¿Desea cerrar la sesión del App de Gestión?</p>

                <form>
                    <input 
                        className='button-logout' 
                        type="button" 
                        value="Sip!" 
                        onClick={ doLogOut }
                    />

                    <input
                        name="logout" 
                        className='button-logout' 
                        type="button" 
                        value="Nop!" 
                        onClick={ () => console.log('Volver volver volver....') }
                    />
                </form>

            </Styled.NavBarStyle>
        </>

    );
}


export default ModalContent;