import { styled } from 'styled-components';

const LogContain = styled.div`

@media screen and (max-width : 640px) {
 
    display        : flex,
    flex-direction : column;
    color          : white;
    text-align     : center;
    

    .headTitle{
        margin-top : 15px;
        font-size  : 35px;
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

}

`


export default {
    LogContain,
};