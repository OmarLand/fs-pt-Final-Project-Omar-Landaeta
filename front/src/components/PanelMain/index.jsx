import Styled from './styles.jsx';

import Products from '../Products/Products.jsx';

const PanelContainer = () => {

    // const { data : product } = useProducts();
    // console.log('> Nombre Productos de la base de datos: ', product ) ;

    return (
        <>
            <Styled.PanelContain>
                
                <h2>Listado de productos:</h2>
                <Products />

            </Styled.PanelContain>
        </>
    )
}

export default PanelContainer;