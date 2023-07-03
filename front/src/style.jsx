import { styled } from "styled-components";

const MainContain = styled.div`

    display         :flex;
    justify-content : center;
    margin-top      : 170px;

`;

const ContainerPage = styled.div`

        display                 : flex;
        justify-content         : center;
        background              : rgba( 255, 255, 255, 0.25 );
        box-shadow              : 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter         : blur( 4px );
        -webkit-backdrop-filter : blur( 4px );
        border-radius           : 10px;
        border                  : 1px solid rgba( 255, 255, 255, 0.18 );
        width                   : 65%;
        color                   : white;
        height                  : 460px;
        box-shadow              : 1px 1px 20px white;

`;



export default {
    MainContain,
    ContainerPage,
};
