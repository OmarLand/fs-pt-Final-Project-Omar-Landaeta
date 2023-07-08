import { styled } from "styled-components";

const Form = styled.form`

        
    @media screen and (max-width : 640px) {
        

        body{
    
        background  : #0F2027;
        background  : -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
        background  : linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        }

        .input-text{
            margin-top    : 5px;
            margin-bottom : 8px;
            width         : 250px;
            height        : 30px;
            text-align    : center;
            font-size     : 18px; 
            box-shadow    : 1px 1px 10px black;
            border-radius : 10px;
        }
    
        .submitButton{
            margin-top    : 5px;
            width         : 95px;
            height        : 30px;
            border-radius : 10px;
            box-shadow    : 1px 1px 15px black;
        }
        
        .submitButton:hover{
            background-color  : #EEFCCE;
        }
    }

        
    @media screen and (min-width : 641px) {
        
        body{
    
            background  : #0F2027;
            background  : -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
            background  : linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        }

        .input-text{
            margin-top    : 1px;
            margin-bottom : 8px;
            width         : 250px;
            height        : 30px;
            text-align    : center;
            font-size     : 18px; 
            box-shadow    : 1px 1px 10px black;
            border-radius : 10px;
        }
    
        .submitButton{
            margin-top    : 5px;
            width         : 95px;
            height        : 30px;
            border-radius : 10px;
            box-shadow    : 1px 1px 15px black;
        }
        .submitButton:hover{
            background-color  : #EEFCCE;
        }
    }



`;

export default {
    Form,
};