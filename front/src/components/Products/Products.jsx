import React from 'react'
import { useProducts } from '../../hooks';
import Styled from './styles'

const Products = () => {

    const { data : productsInfo } = useProducts();

    // console.log('> Nombre Productos de la base de datos: ', productsInfo ) ;

    return (    
        <> 
            <Styled.DivProducts className='box'>
                <table>
                    <thead className='head-text sticky-head'>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Stock</th>
                            <th>Proveedor</th>
                            <th>Contacto</th>
                          
                        </tr>
                    </thead>

                    <tbody>
                        {productsInfo?.map( (product) => {
                            return(
                                <>
                                    <tr>
                                        <td>{product.name_prod}</td>
                                        <td>{product.desc_prod}</td>
                                        <td>{product.quant_prod}</td>
                                        <td>{product.name_sup}</td>
                                        <td>{product.contact_sup}</td>
                                    
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </Styled.DivProducts>


        </>
    )

}

export default Products