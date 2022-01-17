import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from './components/TransactionModal';
import { TransactionsProvider } from './context/TransactionsCotext';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }


  return (
    <TransactionsProvider>
      <Header OnHandleOpenModal={ handleOpenModal } />
      <Dashboard />
      <TransactionModal modalIsOpen={ modalIsOpen } handleCloseModal={ handleCloseModal } />
    </TransactionsProvider>
  );
}

export default App;
