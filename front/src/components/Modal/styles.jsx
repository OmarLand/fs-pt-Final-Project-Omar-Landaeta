import { styled } from 'styled-components';

const NavBarStyle = styled.div`

    @media screen, (max-width : 640px) {


        display         :flex;
        justify-content : center;
        align-self      : center;
        flex-direction  : column;
        font-size       : 25px;
        text-shadow     : 1px 1px 8px black;

        p {
            text-align   : center;
        }

        form{
            text-align   : center;
        }

        .button-logout{
            
            border-radius : 15px;
            height        : 30px;
            width         : 100px;
            box-shadow    : 1px 1px 10px black;
    
        }

    }
 
    @media screen, (min-width : 641px) {


        display         :flex;
        justify-content : center;
        align-self      : center;
        flex-direction  : column;
        font-size       : 25px;
        text-shadow     : 1px 1px 8px black;

        p {
            text-align   : center;
        }

        form{
            text-align   : center;
        }

        .button-logout{

            border-radius : 15px;
            height        : 30px;
            width         : 100px;
            box-shadow    : 1px 1px 10px black;
    
        }
        
        .button-logout:hover{

            background-color : #4E6E5D;
            color            : white;
    
        }

    }

`

export default {
    NavBarStyle,
};