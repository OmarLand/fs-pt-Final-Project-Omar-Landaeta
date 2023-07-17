import Styled from "./styles";

import { useUser } from '../../hooks'

const UserName = () =>{

    const { data : user } = useUser();

    console.info('> Username Panel: ', user.content.username );

    return(
        <>
            <Styled.UserNameStyle>
                {/* <p className="username-Style">UserName</p> */}
                <p className="username-Style">Usuario: { user.content.username }</p>
            </Styled.UserNameStyle>
        </>
    );
}


export default UserName;