import Styled from './styles';

const NewSuppliers = () => {


    return(
        <>
            <Styled.FormNewSuppliers>

                <form>

                    <input className='input-text' type="text" placeholder='Nombre Proveedor' name="name" id="name" />
                    <br />

                    <input className='input-text' type="text" placeholder='Telef./Correo' name="contact" id="contact" />
                    <br />

                    <input className='input-text' type="text" placeholder='Descripción' name="description" id="description" />
                    <br />

                    <input className='button-submit' type="submit" value="Grabar" />
                    <input className='button-submit' type="button" value="Volver"/>

                   {/* <div className='button-submit'>
                        <Link href="/suppliers" > <a>Volver</a> </Link>
                    </div>  */}

                </form>

            </Styled.FormNewSuppliers>

        </>
    );
}

export default NewSuppliers;


