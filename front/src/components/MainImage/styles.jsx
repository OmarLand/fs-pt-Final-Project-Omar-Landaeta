import { styled } from "styled-components";

const Img = styled.div`
  @media screen and (max-width : 640px) {
    .size-img{
      width: 40%;
      margin-bottom: -25px;
    }
  }

  @media screen and (min-width : 641px) {
    .size-img{
      width: 20%;
      margin-bottom: -10px;
    }
  }

`

export default {

    Img,

};