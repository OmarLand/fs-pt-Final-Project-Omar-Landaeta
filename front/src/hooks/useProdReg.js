import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { products } from '../services';

export const useProdRed = () => {
    
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();

    const { mutate : register} = useMutation({
        mutationFn : products.registerProd,
        onSuccess  : (data) => {
            if( data.success ) setLocation('/panel');
            console.info(" => Producto Registrado correctamente! <= ");
        },
    });

    return register;

};