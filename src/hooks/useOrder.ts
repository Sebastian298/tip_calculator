 import { useState } from "react"
import type { OrderItem } from "../types"
 export const useOrder = () => {
    const [order,setOrder] = useState<OrderItem[]>([])
 }