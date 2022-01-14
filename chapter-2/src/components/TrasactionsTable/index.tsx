import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  date: string;
}

export function TransacrionsTable () {

  const [transactions, setTransactions] = useState<Transactions []>([]);

  useEffect(() => {
    api.get('/transactions').then(json => setTransactions(json.data));
  },[]);
  console.log(transactions);
  

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="deposit">+ R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>14/01/22</td>
          </tr>

          <tr>
            <td>Luz</td>
            <td className="withdrawal">- R$ 120,00</td>
            <td>Custo mensal</td>
            <td>14/01/22</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}