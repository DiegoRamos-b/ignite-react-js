import Modal from 'react-modal';

interface TransactionModalProps {
  modalIsOpen: boolean,
  handleCloseModal: () => void;
}

export function TransactionModal ({ modalIsOpen, handleCloseModal }: TransactionModalProps ) {
  return(
    <Modal
      isOpen={ modalIsOpen }
      onRequestClose={ handleCloseModal }
    >
      <h2>Cadastrar transação</h2>
    </Modal>
  );
}