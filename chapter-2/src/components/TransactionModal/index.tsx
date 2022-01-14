import Modal from 'react-modal';
import { Container } from './style';

interface TransactionModalProps {
  modalIsOpen: boolean,
  handleCloseModal: () => void;
}

export function TransactionModal ({ modalIsOpen, handleCloseModal }: TransactionModalProps ) {
  return(
    <Modal
      isOpen={ modalIsOpen }
      onRequestClose={ handleCloseModal }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}