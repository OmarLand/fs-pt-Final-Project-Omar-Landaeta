import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { auth } from '../services';

export const useRegister = () => {
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();

    const { mutate } = useMutation({
        mutationFn : auth.register,
        onSuccess  : (data) => {
            if( data.success ) setLocation('/login');
            console.info(" => Registrado correctamente! <= ");
        },
    });

    return mutate;

};