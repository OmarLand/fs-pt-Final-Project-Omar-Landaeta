import React, { useState } from 'react'
import { useProducts } from '../../hooks';
import Styled from './styles'

const Products = () => {

    const { data : productsInfo } = useProducts();

    // console.log('> Nombre Productos de la base de datos: ', productsInfo ) ;

    return (    
        <> 
            <Styled.DivProducts>
                <table className='table-responsive'>
                    <thead className='head-text'>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Stock</th>
                            <th>Proveedor</th>
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
                                        <td>{product.name_sup_product}</td>
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