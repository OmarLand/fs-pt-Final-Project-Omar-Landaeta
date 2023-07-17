import { useQuery } from "react-query"
import { products } from "../services"


export const useProducts = () => {
    const { data, isLoading } = useQuery({
        queryKey : ['product'],
        queryFn  : products.infoProd,
    })
    return { data, isLoading }
}


