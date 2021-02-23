import React from 'react';

import LogoImg from '../../static/assets/ds-circle-logo.png';

const Logo = props => {
    const size = {
        width: props.size ? props.size : 105
    }

    return (
        <div className="logo-main">
            <img style={size} alt="Daily Smarty UI Logo" src={LogoImg} />
        </div>
    )
}

export default Logo;

