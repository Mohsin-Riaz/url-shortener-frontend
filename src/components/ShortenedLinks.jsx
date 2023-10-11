import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { FaArrowAltCircleDown, FaCopy, FaTimes } from 'react-icons/fa';
import { apiDelete } from '../api/postgres';
const ShortenedLinks = ({ links, deleteLink }) => {
    const Url = import.meta.env.VITE_BACKEND_URL + '/v/';

    return (
        <section className="links-section">
            {links.map((link, index) => {
                const { short_url, long_url } = link;

                function handleDelete(short_url) {
                    apiDelete(short_url).then((response) => {
                        if (response.success === false) return;
                        deleteLink(short_url);
                    });
                }

                return (
                    <article
                        key={short_url}
                        className={
                            link.animation
                                ? 'single-link fade-in'
                                : 'single-link'
                        }
                    >
                        <div className="links">
                            <div className="long-url">
                                <a href={long_url}>{long_url}</a>
                            </div>

                            <div className="arrow">
                                <FaArrowAltCircleDown />
                            </div>

                            <div className="url-copy">
                                <div className="short-url">
                                    <a href={Url + short_url}>
                                        {Url + short_url}
                                    </a>
                                </div>

                                <button
                                    className="copy"
                                    value={Url + short_url}
                                    onClick={(e) => {
                                        navigator.clipboard.writeText(
                                            e.currentTarget.value
                                        );
                                    }}
                                >
                                    <FaCopy />
                                </button>
                            </div>
                        </div>

                        <div className="qrcode">
                            <QRCodeSVG value={Url + short_url} />
                        </div>

                        <button
                            id={short_url}
                            onClick={() => handleDelete(short_url)}
                            className={
                                index === 0
                                    ? 'delete-disabled '
                                    : 'delete-button'
                            }
                            disabled={index === 0 ? true : false}
                        >
                            <FaTimes />
                        </button>
                    </article>
                );
            })}
        </section>
    );
};

export default ShortenedLinks;
