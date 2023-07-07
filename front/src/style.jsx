import { styled } from "styled-components";

const MainContain = styled.div`

    display         :flex;
    justify-content : center;
    margin-top      : 170px;

`;

const ContainerPage = styled.div`

    @media screen and (max-width : 640px) {

            display                 : flex;
            justify-content         : center;
            background              : rgba( 255, 255, 255, 0.25 );
            box-shadow              : 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter         : blur( 4px );
            -webkit-backdrop-filter : blur( 4px );
            border-radius           : 10px;
            border                  : 1px solid rgba( 255, 255, 255, 0.18 );
            width                   : 65%;
            height                  : 550px;
            color                   : white;
            box-shadow              : 1px 1px 20px white;

            .goToRegister{
                margin-top : 30px;
                color      : white;
                font-size  : 15px;
            }
            .click-toRegister{
                color      : white;
                font-size  : 15px;
            }

            .click-toRegister:hover{
                color      : blue;
                font-size  : 15px;
            }
    }
    @media screen and (min-width : 641px) {

            display                 : flex;
            justify-content         : center;
            background              : rgba( 255, 255, 255, 0.25 );
            box-shadow              : 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            backdrop-filter         : blur( 4px );
            -webkit-backdrop-filter : blur( 4px );
            border-radius           : 10px;
            border                  : 1px solid rgba( 255, 255, 255, 0.18 );
            width                   : 55%;
            height                  : 570px;
            color                   : white;
            box-shadow              : 1px 1px 20px white;
            margin-top              : -95px;

            .goToRegister{
                margin-top : 30px;
                color      : white;
                font-size  : 15px;
            }

            .click-toRegister{
                color      : white;
                font-size  : 15px;
            }

            .click-toRegister:hover{
                color      : yellow;
                font-size  : 15px;
            }
    }

`;



export default {
    MainContain,
    ContainerPage,
};
