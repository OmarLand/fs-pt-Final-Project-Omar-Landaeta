import { styled } from 'styled-components';

const PanelContain = styled.div`

@media screen and (max-width : 640px) {
    
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    

    .headTitle{
        margin-top : 15px;
        font-size  : 35px;
    }

    .dataProducts{
        border: 1px solid red;
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
        text-align: left;
        padding: 8px;
    }

    a:active, a:visited {
        color: red;
        font-weight: bold;
    }
    
      


}

@media screen and (min-width : 641px) {
 
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    

    .headTitle{
        margin-top : 15px;
        font-size  : 35px;
    }

    .dataProducts{
        border: 1px solid red;
        height: 67%;
        max-width: 100%;
        
    }

    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        max-width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }

      a:active, a:visited {
        color: red;
        font-weight: bold;
    }
    

}

`


export default {
    PanelContain,
};