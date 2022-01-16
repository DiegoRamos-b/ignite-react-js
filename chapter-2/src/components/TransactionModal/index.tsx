import Modal from 'react-modal';
import { Container } from './style';
import closeImg from '../../assets/close.svg'

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
      <button type="button" className="button-modal-close" onClick={ handleCloseModal } >
        <img src={ closeImg  } alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}