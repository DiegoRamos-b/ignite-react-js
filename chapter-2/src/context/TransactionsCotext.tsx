import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}
interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transactions, 'id' | 'date'>;

interface TransactionsContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api.get("/transactions").then(response => setTransactions(response.data.transactions));
  }, []);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  return (
    <TransactionsContext.Provider value={ { transactions, createTransaction } }>
      {children}
    </TransactionsContext.Provider>
  )
}