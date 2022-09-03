import { useMemo } from "react";
import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary(){
    const transactions  = useContextSelector(TransactionsContext, (context)=> {
      return context.transactions
    });
  

    const summary = useMemo(()=> {
      return transactions.reduce((inicial, currentTransaction)=>{
      
        if(currentTransaction.type=="income"){
           inicial.income += currentTransaction.price
           inicial.total += currentTransaction.price
        } else{
          inicial.outcome += currentTransaction.price
          inicial.total -= currentTransaction.price
        }
        
        return inicial
      }, {income: 0, outcome: 0, total: 0})
    }, [transactions])

    return summary

}