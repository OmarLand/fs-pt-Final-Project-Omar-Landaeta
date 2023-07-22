import { Link } from 'wouter';

import Styled from '../../components/PanelMain/styles';
import Title from "../../components/Title";
import PanelContainer from '../../components/PanelMain';
import NavBar from '../../components/NavBar';
import UserName from "../../components/UserName";

const links = [
    <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
    <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
    <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>, 
];



const PanelMain = () => {

    return(
        <>
            <Styled.PanelContain>   
             
                <Title title='App de Gestión'/>

                <UserName/>

                <NavBar links = {links}/>
                
                <PanelContainer/>

            </Styled.PanelContain>
        </>
    )

}


export default PanelMain;