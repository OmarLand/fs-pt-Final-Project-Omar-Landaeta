import { useQuery } from "react-query"
import { suppliers } from "../services"


export const useSuppliers = () => {
    const { data, isLoading } = useQuery({
        queryKey : ['product'],
        queryFn  : suppliers.infoSup,
    })
    return { data, isLoading }
}


