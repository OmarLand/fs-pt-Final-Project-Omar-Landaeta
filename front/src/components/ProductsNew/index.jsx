import { Link } from 'wouter';

import Styled from './styles';

import Title from '../../components/Title';
import NavBar from '../NavBar';
import UserName from '../UserName';


const links = [
    <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
    <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
    <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>, 
];

const NewProductsForm = () => {
    return(

        <>

            <Styled.FormNewProductStyle>

                <Title className="headTitle" title='App de Gestión'/>

                <UserName/>

                <NavBar links = {links} />

                <h2>Registro de productos:</h2>
                
                <form>

                    <input className="input-text" placeholder='Cod. Artículo' type="text" name="cod_art" id="cod_art " />
                    <br />
                    <input className="input-text" placeholder='Nombre del artículo' type="text" name="name_art" id="name_art " />
                    <br />
                    <input className="input-text" placeholder='Descripción del artículo' type="text" name="desc_art" id="desc_art " />
                    <br />
                    <input className="input-text" placeholder='Cant. Artículo' type="text" name="quant_art" id="quant_art " />
                    <br />
                    <input className='button-submit' type="submit" value="Registrar" />
                    <input className='button-submit' type="submit" value="Volver" />
               
               </form>

            </Styled.FormNewProductStyle>

        </>

    );
}

export default NewProductsForm;