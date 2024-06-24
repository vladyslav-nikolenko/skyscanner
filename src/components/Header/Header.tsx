const logo = require("../../../public/Logo") as string;

export const Header = () => {
  return (
    <header className='header'>
      <a href='/' className='logo logo--matgin-top'>
        <img className='logo__img' src={logo} alt='Logo' />
      </a>
    </header>
  );
};
