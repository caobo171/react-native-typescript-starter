import { useSelector } from "react-redux"

export const useNumber = ()=>{
    const value = useSelector((state:any)=> state.math.value)

    return value
}