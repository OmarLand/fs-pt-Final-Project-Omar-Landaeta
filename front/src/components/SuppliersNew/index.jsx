import Styled from './styles';

import { Link } from 'wouter';

import NavBar from '../../components/NavBar';
import Title from '../Title';

const NewSuppliers = () => {

    const links = [
        <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
        <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
        <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>, 
    ];


    return(
        <>
            <Styled.FormNewSuppliers>

                <Title title = 'App de Gestión'/>

                <NavBar links = {links} />

                <form>

                    <input className='input-text' type="text" placeholder='Nombre Proveedor' name="name" id="name" />
                    <br />

                    <input className='input-text' type="text" placeholder='Telef./Correo' name="contact" id="contact" />
                    <br />

                    <input className='input-text' type="text" placeholder='Descripción' name="description" id="description" />
                    <br />

                    <input className='button-submit' type="submit" value="Grabar" />
                    <input className='button-submit' type="button" value="Volver" />

                   {/* <div className='button-submit'>
                        <Link href="/suppliers" > <a>Volver</a> </Link>
                    </div>  */}

                </form>

            </Styled.FormNewSuppliers>

        </>
    );
}

export default NewSuppliers;



