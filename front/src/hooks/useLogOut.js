import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { auth } from '../services';

export const useLogOut = () => {

    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();
    
    const { mutate } = useMutation({
    
        mutationFn: auth.logout,
        onSuccess: (result) => {
          if (result.success) {
            console.info('> Cerrando la sesión LogOut!!! <');
            setLocation('/login');
            // queryClient.invalidateQueries({ queryKey: ["user"] });
            queryClient.setQueryData('user', null);
            queryClient.removeQueries();
          }
        },
    });

    return mutate;

}


