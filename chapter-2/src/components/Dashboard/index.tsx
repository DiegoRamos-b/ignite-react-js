import { Summary } from "../Summary";
import { TransacrionsTable } from "../TrasactionsTabble";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransacrionsTable />
    </Container>
  );
}