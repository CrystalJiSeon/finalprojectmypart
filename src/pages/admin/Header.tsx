import React, { useEffect, useState } from 'react';


function Header() {

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <a href="/"><img src="/img/logo2.png" alt="IKEA Logo"/><span>Erpenterprise Resource  Planning</span></a>
                </div>
            </div>
            <div className="bottom-border"></div>
        </header>
    );
}

export default Header;