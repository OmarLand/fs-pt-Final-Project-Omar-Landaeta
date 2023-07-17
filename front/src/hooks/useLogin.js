import { useMutation, useQueryClient } from 'react-query'
import { useLocation } from 'wouter'
import { auth } from '../services';

export const useLogin = () => {
    const queryClient = useQueryClient();
    const [, setLocation] = useLocation();

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
    // return { register, login };
};