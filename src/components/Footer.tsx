import { FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import React from 'react';

const Footer: React.FC = () => {

    return (
        <footer className="relative">
            <div className="flex justify-evenly hover:dark:text-whitehover:cursor-pointer">
                <div className="flex gap-8">
                    <a href="https://github.com/bastienyoussfi" target="_blank" className="size"><FaGithub className="transition duration-300 text-2xl opacity-70 hover:opacity-100"></FaGithub></a>
                    <a href="http://linkedin.com/in/bastienyoussfi" target="_blank" className=""><FaLinkedin className="transition duration-300 text-2xl opacity-70 hover:opacity-100"></FaLinkedin></a>
                    <a href="https://twitter.com/bastienyoussfi_" target="_blank" className=""><FaXTwitter className="transition duration-300 text-2xl opacity-70 hover:opacity-100"></FaXTwitter></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;