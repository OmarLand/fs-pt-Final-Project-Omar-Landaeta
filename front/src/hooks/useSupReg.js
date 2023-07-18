import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { suppliers } from '../services';

export const useSupReg = () => {
    
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();

    const { mutate : register} = useMutation({
        mutationFn : suppliers.registerSup,
        onSuccess  : (data) => {
            if( data.success ) setLocation('/suppliers');
            console.info(" => Proveedor Registrado correctamente! <= ");
        },
    });

    return register;

};