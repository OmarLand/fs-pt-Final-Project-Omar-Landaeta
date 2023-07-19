import { styled } from 'styled-components';

const FormNewProductStyle = styled.div`

    @media screen and (max-width : 640px) {
    
        display        : flex,
        flex-direction : column;
        color          : white;
        text-align     : center;
        margin-top     : 65px;
        width          : 95%;

        h2{
            text-shadow : 1px 1px 15px black;
        }
        

        .headTitle{
            margin-top : -50px;
            font-size  : 28px;
        }

        .input-text{

            height        : 28px; 
            width         : 250px;
            margin-top    : 10px;
            border-radius : 15px;
            box-shadow    : 1px 1px 10px black;
            text-align    : center;
        }

        .button-submit{
            margin-top    : 20px;
            border-radius : 15px;
            height        : 30px;
            width         : 130px;
            box-shadow    : 1px 1px 10px black;

        }

    }

    @media screen and (min-width : 641px) {
    
        display        : flex,
        flex-direction : column;
        color          : white;
        text-align     : center;
        margin-top     : 65px;
        width          : 95%;

        h2{
            text-shadow : 1px 1px 15px black;
        }

        .headTitle{
            margin-top : -50px;
            font-size  : 25px;
        }

        
        .input-text{

            height        : 28px; 
            width         : 250px;
            margin-top    : 10px;
            border-radius : 15px;
            box-shadow    : 1px 1px 10px black;
            text-align    : center;
        }

        .button-submit{
            margin-top    : 20px;
            border-radius : 15px;
            height        : 30px;
            width         : 130px;
            box-shadow    : 1px 1px 10px black;

        }


    }

`


export default {
    FormNewProductStyle,
};