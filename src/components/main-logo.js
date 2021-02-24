import React from 'react';
import { Link } from 'react-router-dom'

import LogoImg from '../../static/assets/ds-circle-logo.png';

const Logo = props => {
    const size = {
        width: props.size ? props.size : 105
    }

    return (
        <div className="logo-main">
            <Link to="/">
                <img style={size} alt="Daily Smarty UI Logo" src={LogoImg} />
            </Link>
        </div>
    )
}

export default Logo;

