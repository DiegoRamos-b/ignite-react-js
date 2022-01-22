import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import style from "./style.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button type='button' className={ style.signInButton }>
      <FaGithub color='#04d361' />
      Nome da pessoa
      <FiX className={ style.closeIcon } color="#737380" />
    </button>
  ) : (
    <button type='button' className={style.signInButton}>
      <FaGithub color='#eba417' />
      Sign in with gitbub
    </button>
  );
}
