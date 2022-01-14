import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';


function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }


  return (
    <>
      <Header OnHandleOpenModal={ handleOpenModal } />
      <Dashboard />

      <Modal
          isOpen={ modalIsOpen }
          onRequestClose={ handleCloseModal }
        >
          <h2>Cadastrar transação</h2>
        </Modal>
    </>
  );
}

export default App;
