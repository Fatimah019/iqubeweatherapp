import React from 'react';
import './index.css';
import Search from '../search';

const Header: React.FC<{}> = () => {
    return (
        <header>
            <div className="header">
                <h1 className="header_title">Weather App</h1>
                <div className="search_con">
                    <Search />
                </div>
                <nav className="nav header_right">
                    <div className="header_right_left">
                        <sup>o</sup>C
                    </div>
                    <div className="header_right_right">
                        <sup>o</sup>F
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
