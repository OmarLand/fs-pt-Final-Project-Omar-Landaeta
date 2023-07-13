
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const Provider = ({children}) => {
    return (
        <QueryClientProvider client={ queryClient } >
            {children}
        </QueryClientProvider>
    )
}

export default Provider;