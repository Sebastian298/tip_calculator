 import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
 export const useOrder = () => {
    const [order,setOrder] = useState<OrderItem[]>([]);

    const addItem = (item:MenuItem) =>{
        const itemExists = order.find((orderItem) => orderItem.id === item.id);
        if(itemExists){
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id 
            ? {...orderItem,quantity:orderItem.quantity+1}
            :orderItem);
            setOrder(updatedOrder);
            return;
        }
        setOrder([...order,{...item,quantity:1}])
    }

    return{
        order,
        addItem
    }
 }