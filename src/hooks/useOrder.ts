 import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"
 export const useOrder = () => {
    const [order,setOrder] = useState<OrderItem[]>([]);
    const [tip,setTip] = useState(0); 

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

    const removeItem = (id:MenuItem['id']) =>{
        const updatedOrder = order.reduce((acc,orderItem) =>{
            if(orderItem.id === id){
                if(orderItem.quantity === 1){
                    return acc;
                }
                return [...acc,{...orderItem,quantity:orderItem.quantity-1}]
            }
            return [...acc,orderItem]
        },[] as OrderItem[]);
        setOrder(updatedOrder);
    };

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem
    }
 }