import { FormEvent, useContext, useState } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";

import closeImg from "../../assets/close.svg";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { TransactionsContext } from "../../context/TransactionsCotext";

interface TransactionModalProps {
  modalIsOpen: boolean;
  handleCloseModal: () => void;
}

export function TransactionModal({modalIsOpen, handleCloseModal }: TransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);
  
  const [title, setTitle] = useState('');
  const [amount, setAmout] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction (event: FormEvent){
    event.preventDefault();

    createTransaction({ title, amount, category, type })
  }

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

      <Container onSubmit={ handleCreateNewTransaction }>
        <h2>Cadastrar transação</h2>

        <input
        type='text'
        placeholder='Titulo'
        value={ title }
        onChange={event => setTitle(event.target.value)}
      />
        <input
          type='number'
          placeholder='Valor'
          value={amount}
          onChange={event => setAmout(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => setType("deposit")}
            isActive={ type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt='Entrada' />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type='button' 
            onClick={() => setType("withdraw")}
            isActive={ type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt='Saida' />
            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type='text'
          placeholder='Categoria'
          value={ category }
          onChange={event => setCategory(event.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </Container>
    </Modal>
  );
}
