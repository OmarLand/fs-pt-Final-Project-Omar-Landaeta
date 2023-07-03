import Styled from './styles.jsx';

const MainImage = ( {img} ) => {
    return (
        <>
            <Styled.Img>
                <img src={img} alt="userImage" className="size-img"/>     
            </Styled.Img>
        </>
    );
}


export default MainImage;