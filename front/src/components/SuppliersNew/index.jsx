//importacion de estilos y librerias
import Styled   from './styles';
import { Link } from 'wouter';
import { useForm } from 'react-hook-form';


// importacion de mis componentes
import NavBar   from '../../components/NavBar';
import Title    from '../Title';
import UserName from '../UserName';
import { useSupReg } from '../../hooks/useSupReg';

const NewSuppliers = () => {

    // Links para navegación del NavBar
    const links = [
        <Link href="/panel">      <a className='links-styled'> Inicio </a></Link>, 
        <Link href="/suppliers">  <a className='links-styled'> Proveedores </a></Link>,
        <Link href="/productsnew"><a className='links-styled'> Transacciones </a></Link>, 
    ];

    // Regresar a pagina anterior
    const goBack = () => {
        window.history.back();
    };

    // Para gestión del formulario
    const { register, formState, handleSubmit } = useForm();

    const doRegisterSupplier = useSupReg();

    return(
        <>
            <Styled.FormNewSuppliers>

                <Title title = 'App de Gestión'/>
                <UserName/>
                <NavBar links = {links} />
                <h2>Registro de proveedores:</h2>

                <form onSubmit={ handleSubmit( doRegisterSupplier ) }>

                    <input 
                        className='input-text' 
                        type="text"
                        placeholder='Nombre Proveedor' 
                        name="name_sup" 
                        id="name_sup" 
                        {...register("name_sup", {required : true})}
                    />
                    <br />

                    <input 
                        className='input-text' 
                        type="text" 
                        placeholder='Telef./Correo' 
                        name="contact_sup" 
                        id="contact_sup" 
                        {...register("contact_sup", {required : true})}
                    />
                    <br />

                    <input 
                        className='input-text' 
                        type="text" 
                        placeholder='Descripción'
                        name="desc_sup" 
                        id="desc_sup" 
                        {...register("desc_sup", {required : true})}
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
                    
            </Styled.FormNewSuppliers>

        </>
    );
}

export default NewSuppliers;



