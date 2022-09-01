import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary(){
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce((inicial, currentTransaction)=>{
      
      if(currentTransaction.type=="income"){
         inicial.income += currentTransaction.price
         inicial.total += currentTransaction.price
      } else{
        inicial.outcome += currentTransaction.price
        inicial.total -= currentTransaction.price
      }
      
      return inicial
    }, {income: 0, outcome: 0, total: 0})

    return summary

}