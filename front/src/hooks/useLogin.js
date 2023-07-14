import { useMutation, useQueryClient } from 'react-query'
import { auth } from '../services';
import { useLocation } from 'wouter'

export const useLogin = () => {
    const [, setLocation] = useLocation();

    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationFn : auth.login,
        onSuccess: ( data ) =>{
            console.info('=> Hook Mutation Response: ', data);
            if( data.success ) setLocation('/panel');
            //  {
            //     queryClient.invalidateQueries({ queryKey:["user"] });
            // }
        },
    });

    return mutate;
};