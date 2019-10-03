import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo.svg';

import { Container, Cart } from './style';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carringo</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size="36" color="#fff" />
      </Cart>
    </Container>
  );
}

export default Header;
