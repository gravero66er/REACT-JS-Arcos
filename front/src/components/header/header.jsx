import React from 'react';
import HeaderBurger from './header__burger';
import HeaderLogo from './header__logo';

function Header() {
    return (
        <div className='header'>
            <HeaderLogo />
            <HeaderBurger />
        </div>
    )
}

export default Header;