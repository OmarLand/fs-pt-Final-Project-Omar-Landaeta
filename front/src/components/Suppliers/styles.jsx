import { styled } from 'styled-components';

const DivSuppliers = styled.div`

    font-size    : 13px;
    margin-left  : 22px; 
  
    .head-text{
        text-shadow : 1px 1px 10px black;
    }

    // Controlo ocultar el Scrolling en productos cuando overflow
    .box{
        margin-top : -10px;
        height     : 370px;
        overflow-y : scroll;
    }

    .box::-webkit-scrollbar {
        display   : none;
    }
    // FIN - Controlo ocultar el Scrolling en productos cuando overflow

    .sticky-head{
        position         : sticky;
        top              : 0;
        background-color : #546A7B;
    }

`

export default {
    DivSuppliers,
}