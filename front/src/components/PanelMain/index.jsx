import Styled from './styles.jsx';

import { useProducts } from '../../hooks';

const PanelContainer = () => {

    const { data : product } = useProducts();

    console.info('> Nombre Productos de la base de datos: ', product[0].name_prod) ;

    return (
        <>
            <h2>Listado de productos:</h2>

            <div className="dataProducts">

                <table>
                    <tr>
                        <th>Cod</th>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Proveedor</th>
                    </tr>
                    <tr>
                        <td>ABC123</td>
                        <td>Product_1</td>
                        <td>15</td>
                        <td>Proveedor_1</td>
                    </tr>
                   
               
                </table>

            </div>

        </>
    )
}

export default PanelContainer;