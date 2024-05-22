import React, { useRef, useState } from 'react';
// import { apiDelete } from '../api/postgres'; ## For postgresql
import Link from './Link';
const ShortenedLinks = ({ links, deleteLink }) => {
    return (
        <section className="links-section">
            {links.map((link, index) => {
                return (
                    <Link
                        link={link}
                        key={index}
                        index={index}
                        deleteLink={deleteLink}
                    ></Link>
                );
            })}
        </section>
    );
};

export default ShortenedLinks;
