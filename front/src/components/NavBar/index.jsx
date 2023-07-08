import Styled from './styles';
import { Link } from 'wouter';

const NavBar = ( { links } ) => {
    return(
        <>
            <Styled.NavBarStyle>

                <ul className="navbar">
                    { links.map( (link,index) =>(
                        <li key={index}> {link} </li>
                        ))} 
                    <li> <Link href="/logout"><a className='links-styled'> <img src="https://www.vhv.rs/file/max/4/44780_logout-icon-png.png" className="imgLogOut"></img>  </a></Link> </li>
                </ul>

            </Styled.NavBarStyle>
        </>
    );
}

export default NavBar;