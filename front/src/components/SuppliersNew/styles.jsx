import { styled } from 'styled-components';

const FormNewSuppliers = styled.div`

@media screen and (max-width : 640px) {
 
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    margin-top: 65px;
    

    .headTitle{
        margin-top : -115px;
        font-size  : 28px;
    }

    .input-text{

        height: 28px; 
        width : 250px;
        margin-top: 10px;
        border-radius: 15px;
        box-shadow: 1px 1px 10px black;
        text-align: center;
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

    .headTitle{
        margin-top : -115px;
        font-size  : 25px;
    }

    
    .input-text{

        height: 28px; 
        width : 250px;
        margin-top: 10px;
        border-radius: 15px;
        box-shadow: 1px 1px 10px black;
        text-align: center;
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
    FormNewSuppliers,
};