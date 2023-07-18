import { styled } from 'styled-components';

const SuppliersList = styled.div`

    @media screen and (max-width : 640px) {

        display         : flex;
        justify-content : center;  
        
        .centering-form{
            display         : flex;
            justify-content : center;

        }
        
        .dataSuppliers{
            text-align : center;
            height     : 63%;
            max-width  : 100%;
        }

        table {
            font-family      : arial, sans-serif;
            border-collapse  : collapse;
            max-width        : 100%;
        }

        td, th {
            border     : 1px solid #dddddd;
            text-align : center;
            padding    : 8px;
        }
    
        a:active, a:visited, a:link {
            color            : black;
            font-weight      : bold;
            text-decoration  : none;
        }

        .submit-Button{
            width            : 275px;
            height           : 20px;
            color            : black;
            background-color : #C4CAD0;
            padding          : 5px;
            margin-bottom    : 25px;
            margin-left       : 25px;
            border-radius    : 18px;
            box-shadow       : 1px 1px 10px black;
            
        }
    }

    @media screen and (min-width : 641px) {

        display         : flex;
        justify-content : center;  
        
        .centering-form{
            display         : flex;
            justify-content : center;

        }
        
        .dataSuppliers{
            text-align   : center;
            height       : 63%;
            max-width    : 100%;
        }

        table {
            font-family     : arial, sans-serif;
            border-collapse : collapse;
            max-width       : 100%;
        }

        td, th {
            border      : 1px solid #dddddd;
            text-align  : center;
            padding     : 8px;
        }
    
        a:active, a:visited, a:link {
            color            : black;
            font-weight      : bold;
            text-decoration  : none;
        }

        .submit-Button{
            width             : 280px;
            height            : 25px;
            color             : black;
            background-color  : #C4CAD0;
            padding-top       : 5px;
            margin-bottom     : 25px;
            margin-left       : 25px;
            border-radius     : 18px;
            box-shadow        : 1px 1px 10px black;
        }
    }

`


export default {
    SuppliersList,
};