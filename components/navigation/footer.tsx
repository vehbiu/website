import React, { createElement } from 'react';
import contact from '@/data/contact';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t-2 border-slate-800/80 py-8">
            <div className="container px-6 mx-auto">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        {contact.map(({ icon, url }) => (
                            <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                {createElement(icon, { size: 24 })}
                            </a>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm">
                        <strong>&copy; {new Date().getFullYear()} Vehbi Unal</strong>. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;