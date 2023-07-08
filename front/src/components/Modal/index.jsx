import Styled from './styles';

const ModalContent = () => {
    return(

        <>
            <Styled.NavBarStyle>
                <p>¿Desea cerrar la sesión del App de Gestión?</p>

                <form>
                    <input className='button-logout' type="button" value="Sip!" />
                    <input className='button-logout' type="button" value="Nop!" />
                </form>
            </Styled.NavBarStyle>
        </>

    );
}


export default ModalContent;