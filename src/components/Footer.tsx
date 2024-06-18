import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className="mt-44">
            <p>Copyright &copy; {new Date().getFullYear()} Your Company Name</p>
        </footer>
    );
}

export default Footer;