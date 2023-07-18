import { Redirect, useLocation } from "wouter";
import { useUser } from "../../hooks"

const Guard = ( {component: Component} ) => {

    // const [, setLocation] = useLocation();

    const { data, isLoading } = useUser();
    
    if (isLoading ) return <p>Cargando datos...</p>

    return data ? <Component/> : <Redirect to="/login"/>;
    // return data ? <Component/> :  setLocation('/login');

}

export default Guard