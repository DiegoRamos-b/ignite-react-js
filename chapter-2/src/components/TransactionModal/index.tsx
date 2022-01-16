import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";

import closeImg from "../../assets/close.svg";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface TransactionModalProps {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}

export function TransactionModal({
  modalIsOpen,
  handleCloseModal,
}: TransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <button
        type='button'
        className='button-modal-close'
        onClick={handleCloseModal}
      >
        <img src={closeImg} alt='Fechar modal' />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input type='text' placeholder='Titulo' />
        <input type='number' placeholder='Valor' />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType("deposit")}
            isActive={ type === 'deposit'}
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type='button' 
            onClick={() => setType("withdraw")}
            isActive={ type === 'withdraw'}
          >
            <img src={outcomeImg} alt='Saida' />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type='text' placeholder='Categoria' />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
