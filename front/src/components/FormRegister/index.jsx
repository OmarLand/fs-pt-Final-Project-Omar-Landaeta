import Styled from './styles';

const FormRegister = () => {
    return (
        <>
            <Styled.FormRegisterStyle>
                <input className="input-text" required type="text" placeholder="Username" />
                <br />
                <input className="input-text" required type="email" placeholder="e-mail" />
                <br />
                <input className="input-text" required type="password" placeholder="* * * * * * * *" name="" id="" />
                <br />
                <input className='submitButton' type="submit" />
            </Styled.FormRegisterStyle>

        
        </>
    );
}

export default FormRegister;