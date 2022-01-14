import { Summary } from "../Summary";
import { TransacrionsTable } from "../TrasactionsTable";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransacrionsTable />
    </Container>
  );
}