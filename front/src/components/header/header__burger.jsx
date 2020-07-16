import React, { useState } from "react";
import HeaderMenu from "./header__menu";
import HeaderIcons from "./header__social-icons";
import styled from "styled-components";

const Burger = styled.div`
  div {
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(-50%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }

  @media (max-width: 375px) {
    transform: ${({ open }) => (open ? "translateX(20%)" : "translateX(0)")};
  }
`;

export default function HeaderBurger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderIcons />
      <Burger className="header__burger" open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <HeaderMenu open={open} />
    </>
  );
}
