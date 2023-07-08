import { styled } from 'styled-components';

const PanelContain = styled.div`

@media screen and (max-width : 640px) {
    
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;

    h2{
        text-shadow : 1px 1px 15px black;
    }
    

    .headTitle{
        margin-top : 15px;
        font-size  : 28px;
    }

    .dataProducts{
        height    : 63%;
        max-width : 100%;
        
    }

    table {
        font-family     : arial, sans-serif;
        border-collapse : collapse;
        max-width       : 100%;
    }
      
    td, th {
        border     : 1px solid #dddddd;
        text-align : left;
        padding    : 8px;
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

    h2{
        text-shadow : 1px 1px 15px black;
    }
    

    .headTitle{
        margin-top : 15px;
        font-size  : 25px;
    }

    .dataProducts{
        height     : 67%;
        max-width  : 100%;
        
    }

    table {
        font-family     : arial, sans-serif;
        border-collapse : collapse;
        max-width       : 100%;
      }
      
      td, th {
        border      : 1px solid #dddddd;
        text-align  : left;
        padding     : 8px;
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