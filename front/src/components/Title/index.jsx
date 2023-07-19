import Styled from './styles.jsx';

function Title(props){
    return (
        <>
            <Styled.LogContain>

                <h1 className='headTitle' > {props.title}</h1>
                <h2 className='secondTitle'>{props.subtitle}</h2>  

            </Styled.LogContain>
        </>
    );
}

export default Title;