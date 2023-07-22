import Styled from './styles';
import { Link } from 'wouter';

// Importación de mis componentes
import Title from '../../components/Title';
import NavBar from '../NavBar';
import UserName from '../UserName';

import { useForm } from 'react-hook-form';
import { useProdRed } from '../../hooks';

const links = [
    <Link href="/panel"><a className='links-styled'> Inicio </a></Link>, 
    <Link href="/suppliers"><a className='links-styled'> Proveedores </a></Link>,
    <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>, 
];

const goBack = () => {
    window.history.back();
};


const NewProductsForm = () => {

    const { register, formState, handleSubmit } = useForm();

    const doRegisterProd = useProdRed()

    return(

        <>

            <Styled.FormNewProductStyle>

                <Title className="headTitle" title='App de Gestión'/>

                <UserName/>

                <NavBar links = {links} />

                <h2>Registro de productos:</h2>
                
                <form onSubmit={ handleSubmit( doRegisterProd ) }>

                    {/* <input 
                        className="input-text" 
                        placeholder='Cod. Artículo' 
                        type="text" 
                        name="cod_art" 
                        id="cod_art " 
                        {...register("name_prod", { required:true })}
                    />
                    <br />
                     */}
                    <input 
                        className="input-text" 
                        placeholder='Nombre del artículo' 
                        type="text" 
                        name="name_prod" 
                        id="name_prod" 
                        {...register("name_prod", { required:true })}
                    />
                    <br />
                    
                    <input 
                        className="input-text" 
                        placeholder='Descripción del artículo' 
                        type="text" 
                        name="desc_prod	" 
                        id="desc_prod"
                        {...register("desc_prod", { required:true })}
                    />
                    <br />
                    
                    <input 
                        className="input-text" 
                        placeholder='Cant. Artículo' 
                        type="text" 
                        name="quant_prod" 
                        id="quant_prod"
                        {...register("quant_prod", { required:true })}
                    />
                    <br />

                    <input 
                        className="input-text" 
                        placeholder='Proveedor existente *' 
                        type="text" 
                        name="name_sup_product	" 
                        id="name_sup_product	"
                        {...register("name_sup_product", { required:true })}
                    />
                    <br />
                    
                    <input 
                        className='button-submit' 
                        type="submit" 
                        value="Registrar" 
                    />
                    <input 
                        className='button-submit' 
                        type="button" 
                        value="Volver" 
                        onClick={ goBack }
                    />
               
               </form>

               <p className='warning'>* Debe ingresar un proveedor existente</p>

            </Styled.FormNewProductStyle>

        </>

    );
}

export default NewProductsForm;