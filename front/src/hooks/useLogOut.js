import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { auth } from '../services';

export const useLogOut = () => {

    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();
    
    const { mutate: logout } = useMutation({
    
        mutationFn: auth.logout,
        onSuccess: (result) => {
          if (result.success) {
            console.info('> Cerrando la sesión LOGOUT!!! <');
            setLocation('/login');
            queryClient.invalidateQueries({ queryKey: ["user"] });
          }
        },
    });

    return logout;

}


