import React from 'react'

export const Header = () => {

    function toggleMenu() {
        alert('Hello!');
      }

    return (
        <div>

            <header id="topnav" className="defaultscroll">
                <div className="container">
                    <div>
                         
                    </div>
                    <div className="buy-button">
                        <span>
                            <div className="btn btn-primary">Solvate</div>
                        </span>
                    </div>

                    <div className="menu-extras">
                        <div className="menu-item">

                            <span  className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </span>

                        </div>
                    </div>

                    <div id="navigation">

                        <ul className="navigation-menu">
                            <li><span className="sub-menu-item"></span></li>
                        </ul>

                        <div className="buy-menu-btn d-none">
                            <span className="btn btn-primary">Customer</span>
                        </div>

                    </div>

                </div>

            </header>

        </div>
    )
}
