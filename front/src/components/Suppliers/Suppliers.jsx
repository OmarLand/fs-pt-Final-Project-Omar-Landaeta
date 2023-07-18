import React from 'react'
import Styled from './styles'
import { useSuppliers } from '../../hooks';


const Suppliers = () => {

    const { data : suppliersInfo } = useSuppliers();
  
    return (
        <>

            <Styled.DivSuppliers className='box'>
                <table className='table-responsive'>
                        <thead className='head-text sticky-head'>
                            <tr>
                                <th>Nombre</th>
                                <th>Contacto</th>
                                <th>Valoración</th>
                            </tr>
                        </thead>

                        <tbody>
                            {suppliersInfo?.map( (supplier) => {
                                return(
                                    <>
                                        <tr>
                                            <td>{ supplier.name_sup }</td>
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