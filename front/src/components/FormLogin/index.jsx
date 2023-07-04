import Styled from './styles.jsx';

const FormLogin = () => {
    return (
        <>
            <Styled.Form>
                <input className="input-text" required type="email" placeholder="e-mail" />
                <br />
                <input className="input-text" required type="password" placeholder="* * * * * * * *" name="" id="" />
                <br />
                <input className='submitButton' type="submit" value="Entrar"/>
            </Styled.Form>

        
        </>
    );
}

export default FormLogin;