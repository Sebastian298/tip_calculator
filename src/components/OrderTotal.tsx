import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[]
}
export const OrderTotal = ({order}:OrderTotalProps) =>{
    const subTotalAmount = useMemo(()=>order.reduce((total,item)=> total + (item.price * item.quantity),0 ),[order])
    return (
        <>
          <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales  Propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-bold">$0</span>
            </p>
            <p>Total a Pagar: {''}
                <span className="font-bold">$0</span>
            </p>
          </div>
          <button>

          </button>
        </>
    )
}