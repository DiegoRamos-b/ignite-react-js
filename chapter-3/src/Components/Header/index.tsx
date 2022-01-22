import style from './style.module.scss';

export function Header() {
  return (
    <header className={ style.headerContainer }>
      <div className={ style.headerContent }>
        <img src="/images/assets/logo.svg" alt="Logo" />
        <nav>
          <a className={ style.active }>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
