import { Container, Logo } from './Nav.styled';
import logo from '../../images/logo.svg';

const Nav = ({ ...props }) => {
  return (
    <Container {...props}>
      <Logo>
        <img src={logo} alt="logo" />{' '}
      </Logo>
      <h1>Ignite</h1>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </Container>
  );
};

export default Nav;
