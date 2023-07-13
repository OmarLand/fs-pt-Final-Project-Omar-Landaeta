import { Redirect } from "wouter";
import { useUser } from "../../hooks"

const Guard = ( {component: Component} ) => {

    const { data, isLoading } = useUser();
    
    if (isLoading ) return <p>Cargando datos...</p>

    return data ? <Component/> : <Redirect to="/login"/>;

}

export default Guard