import { styled } from 'styled-components';

const NavBarStyle = styled.div`

    @media screen, (max-width : 640px) {

        .navbar{
            border           : 1px solid black;
            background-color : #9BD1E5;
            color            : black;
            display          : flex;
            justify-content  : center;
            list-style       : none;
            gap              : 35px;
            width            : auto;
            height           : 20px;
            padding          : 8px;
            margin-top       : 8px;
            margin-left      : -10px;
            font-size        : 18px;
            text-align       : center;
            box-shadow       : 1px 1px 10px black;
            border-radius    : 9px;

        }

        .imgLogOut{
            width  : 22px;
        }

        a:link, a:visited {
            text-decoration : none;
            color           : black;
        }

        a:active {
            color           : red;
        }
    
    }

    @media screen, (min-width : 641px) {

        .navbar{
            border           : 1px solid black;
            background-color : #9BD1E5;
            color            : black;
            display          : flex;
            justify-content  : center;
            list-style       : none;
            gap              : 35px;
            width            : auto;
            height           : 20px;
            padding          : 8px;
            margin-top       : 8px;
            margin-left: 1px;
            font-size        : 18px;
            text-align       : center;
            box-shadow       : 1px 1px 10px black;
            border-radius    : 9px;

        }


        .navbar li:hover{
            color: gray;
        }

    
    }

`

export default {
    NavBarStyle
};