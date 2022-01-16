import Modal from 'react-modal';
import { Container, TransactionTypeContainer } from './style';

import closeImg from '../../assets/close.svg';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

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

        <TransactionTypeContainer>
          <button>
            <img src={ incomeImg } alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button>
            <img src={ outcomeImg } alt="Saida" />
            <span>Saida</span>
          </button>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" />

        <button type="submit">
          Cadastrar
        </button>

      </Container>
    </Modal>
  );
}