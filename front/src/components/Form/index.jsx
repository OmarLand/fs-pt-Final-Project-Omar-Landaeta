import Styled from './styles.jsx';

const Form = () => {
    return (
        <>
            <Styled.Form>
                <input className="input-text" required type="email" placeholder="e-mail" />
                <br />
                <input className="input-text" required type="password" placeholder="* * * * * * * *" name="" id="" />
                <br />
                <input className='submitButton' type="submit" />
            </Styled.Form>
        </>
    );
}

export default Form;