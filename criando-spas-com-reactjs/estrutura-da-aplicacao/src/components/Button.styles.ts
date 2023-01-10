import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const ButtonVariants = {
  primary: "purple",
  secondary: "red",
  danger: "orange",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${({ theme }) => theme.primary};

  /* ${({ variant }) =>
    css`
      background-color: ${ButtonVariants[variant]};
    `} */
`;
