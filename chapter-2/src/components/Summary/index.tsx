import { useContext } from 'react';
import incomeImg from '../../assets/income.svg' 
import outcomeImg from '../../assets/outcome.svg' 
import totalImg from '../../assets/total.svg' 
import { TransactionsContext } from '../../context/TransactionsCotext';
import { CardSummary } from '../CardSummary';

import { Container } from "./style";


export function Summary() {
  const {transactions} = useContext(TransactionsContext);  
  const summary = transactions.reduce((acc, transaction) =>{
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }

    else{ 
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {deposits: 0, withdraw: 0, total: 0})

  return (
    <Container>
      <CardSummary title="Entradas" image={ incomeImg } value={summary.deposits} />
      <CardSummary  title="Saidas" image={ outcomeImg } value={summary.withdraw} />
      <CardSummary title="Total" image={ totalImg } value={summary.total} />
    </Container>
  );
}