import Styled from './styles'
import { Link } from 'wouter';

const SuppliersList = () => {
    return(
        <>

            <Styled.SuppliersList className='centering-form'>

                <form >

                    <div className='submit-Button' >
                        <Link href="/suppliersnew"><a>Registrar Proveedor</a></Link>
                    </div>

                    <table className='dataSuppliers'>
                        <tr>
                            <th>Nombre</th>
                            <th>Contactos</th>
                            <th>Descripción</th>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                        <tr>
                            <td>Omar</td>
                            <td>99999999</td>
                            <td>Potencial</td>
                        </tr>
                    </table>

                    
                </form>

            </Styled.SuppliersList>

            

    
        </>
    );
}

export default SuppliersList;