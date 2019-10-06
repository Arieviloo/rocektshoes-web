import React from 'react';
import { connect } from 'react-redux';
import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/logo.svg';

import { Container, Cart } from './style';

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carringo</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size="36" color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
