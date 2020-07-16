import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  @media (max-width: 1100px) {
    top: ${({ open }) => (open ? 0 : "-500px")};
  }
`;

export default function HeaderMenu({ open }) {
  return (
    <Menu open={open} className="header__menu">
      <a href="#" className="menu__item">
        О компании
      </a>
      <a href="#" className="menu__item">
        Проекты
      </a>
      <a href="#" className="menu__item">
        Новости
      </a>
      <a href="#" className="menu__item">
        Статистика
      </a>
      <a href="#" className="menu__item">
        Вакансии
      </a>
      <a href="#" className="menu__item">
        Контакты
      </a>
    </Menu>
  );
}
