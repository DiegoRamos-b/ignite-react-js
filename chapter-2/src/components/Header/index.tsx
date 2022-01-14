import logoImg from '../../assets/logo.svg'

import { Container, Content } from './style'


interface HeaderProps {
  OnHandleOpenModal: Function;
}

export function Header({ OnHandleOpenModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={ logoImg } alt="dt money" />
        <button type="button" onClick={ OnHandleOpenModal() }>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
