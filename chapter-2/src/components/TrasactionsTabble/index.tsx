import { Container } from "./style";

export function TransacrionsTable () {
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