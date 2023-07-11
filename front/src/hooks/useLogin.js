import { useMutation, useQueryClient } from 'react-query'
import { auth } from '../services';

export const useLogin = () => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn : auth.login,
        onSuccess: ( response ) =>{
            console.info('=> Mutation Response: ', response);
            if( response.success ) {
                queryClient.invalidateQueries({ queryKey:['user'] })
            }
        },
    });

    return mutate;
};