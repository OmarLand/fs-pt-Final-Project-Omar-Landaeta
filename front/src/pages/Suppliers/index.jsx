import { Link } from 'wouter';

import Styled from '../../components/PanelMain/styles';
import Title from "../../components/Title";
import NavBar from '../../components/NavBar';
import SuppliersList from '../../components/FormSuppliers';
import UserName from '../../components/UserName';

const links = [
    <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
    <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
    <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>,
];



const PanelSuppliers = () => {

    return(
        <>
            <Styled.PanelContain>   
             
                <Title title='App de Gestión'/>

                <UserName/>

                <NavBar links = {links}/>


                <SuppliersList />
            

            </Styled.PanelContain>
        </>
    )

}


export default PanelSuppliers;