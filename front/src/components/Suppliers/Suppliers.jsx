import React from 'react'
import Styled from './styles'
import { useSuppliers } from '../../hooks';


const Suppliers = () => {

    const { data : suppliersInfo } = useSuppliers();
  
    return (
        <>

            <Styled.DivSuppliers className='box'>
                <table>
                        <thead className='head-text sticky-head'>
                            <tr>
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Valoración</th>
                            </tr>
                        </thead>

                        <tbody>
                            {suppliersInfo?.map( (supplier, index) => {
                                return(
                                    <>
                                        <tr>
                                            <td key="{index}">{ supplier.name_sup }</td>
                                            <td>{ supplier.contact_sup }</td>
                                            <td>{ supplier.desc_sup }</td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </table>
            </Styled.DivSuppliers>

        </>
  )

}

export default Suppliers