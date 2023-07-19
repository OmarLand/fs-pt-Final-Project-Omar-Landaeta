import { styled } from 'styled-components';

const LogContain = styled.div`

@media screen and (max-width : 640px) {
 
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    

    .headTitle{
        margin-top  : 15px;
        font-size   : 28px;
        text-shadow : 1px 1px 15px black;
    }
    
    .secondTitle{
        text-shadow : 1px 1px 10px black;
    }

}

@media screen and (min-width : 641px) {
 
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    

    .headTitle{
        margin-top  : 15px;
        font-size   : 25px;
        text-shadow : 1px 1px 15px black;
    }

    .secondTitle{
        text-shadow : 1px 1px 10px black;
    }



}

`


export default {
    LogContain,
};