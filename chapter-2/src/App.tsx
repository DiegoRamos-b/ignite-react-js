import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionModal } from './components/TransactionModal';
import { TransactionsContext } from './context/TransactionsCotext';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }


  return (
    <TransactionsContext.Provider value={[]}>
      <Header OnHandleOpenModal={ handleOpenModal } />
      <Dashboard />
      <TransactionModal modalIsOpen={ modalIsOpen } handleCloseModal={ handleCloseModal } />
    </TransactionsContext.Provider>
  );
}

export default App;
