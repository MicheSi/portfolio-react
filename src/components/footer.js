import React from 'react';

const Footer = props => {
    const date = new Date();
    const newDate = date.getFullYear();
    return (
        <footer>
            <p>&copy; Michelle Sirimanivong {newDate}</p>
        </footer>
    )
}

export default Footer;