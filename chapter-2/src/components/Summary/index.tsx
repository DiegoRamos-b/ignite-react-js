import incomeImg from '../../assets/income.svg' 
import outcomeImg from '../../assets/outcome.svg' 
import totalImg from '../../assets/total.svg' 
import { CardSummary } from '../CardSummary';

import { Container } from "./style";


export function Summary() {
  return (
    <Container>
      <CardSummary title="Entradas" image={ incomeImg } value="R$ 1000" />
      <CardSummary  title="Saidas" image={ outcomeImg } value="- R$ 500" />
      <CardSummary title="Total" image={ totalImg } value="R$ 500" />
    </Container>
  );
}