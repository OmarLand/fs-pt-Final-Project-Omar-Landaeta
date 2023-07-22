import { styled } from 'styled-components';

const PanelContain = styled.div`

    @media screen and (max-width : 640px) {

        display        : flex,
        flex-direction : column;
        color          : white;
        text-align     : center;
        width          : 100%;

        h2{
            text-shadow : 1px 1px 15px black;
        }


        .headTitle{
            margin-top : 15px;
            font-size  : 28px;
        }


        table {
            font-family     : arial, sans-serif;
            border-collapse : collapse;
            width           : 100%;
            max-heigth      : 100%;
            box-shadow      : 1px 1px 10px black;
            font-size       : 11px;
        }

        td, th {
            border     : 1px solid #dddddd;
            text-align : center;
            padding    : 5px;
        }

        a:visited {
            color       : black;
            font-weight : bold;
        }

    }

    @media screen and (min-width : 641px) {

        display        : flex,
        flex-direction : column;
        color          : white;
        text-align     : center;
        width          : 100%;


        h2{
            text-shadow : 1px 1px 15px black;
        }


        .headTitle{
            margin-top : 15px;
            font-size  : 25px;
        }


        table {
            font-family     : arial, sans-serif;
            border-collapse : collapse;
            width           : 100%;
            box-shadow      : 1px 1px 10px black;
            margin-left:;
        }

        td, th {
            border      : 1px solid #dddddd;
            text-align  : center;
            padding     : 7px;
        }

        a:active, a:visited {
            color       : black;
            font-weight : bold;
        }
    }

`


export default {
    PanelContain,
};