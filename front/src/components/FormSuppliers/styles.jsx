import { styled } from 'styled-components';

const SuppliersList = styled.div`

    @media screen and (max-width : 640px) {

        display: flex;
        justify-content: center;     
        
        .dataSuppliers{
            height: 63%;
            max-width: 100%;
        }

        table {
            font-family: arial, sans-serif;
            border-collapse: collapse;
            max-width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            text-align: center;
            padding: 8px;
        }
    
        a:active, a:visited {
            color: red;
            font-weight: bold;
        }
    }

`


export default {
    SuppliersList,
};