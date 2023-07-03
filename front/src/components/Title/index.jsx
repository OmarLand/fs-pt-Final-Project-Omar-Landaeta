import Styled from './styles.jsx';

function Title(props){
    return (
        <>
            <h1 className='headTitle'>{props.title}</h1>
            <h2>{props.subtitle}</h2>  
        </>
    );
}

export default Title;