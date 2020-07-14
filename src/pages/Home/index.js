import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 2
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 2
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 1
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/04/E74-0492-304/E74-0492-304_zoom2.jpg?ts=1587045307&ims=326x"
          alt="Tênis"
        />
        <strong>Tênis Confortável</strong>
        <span>R$129,90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
