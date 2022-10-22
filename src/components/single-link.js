import React from 'react'
import { FaArrowAltCircleDown, FaCopy, FaTimes } from 'react-icons/fa'
import { apiDeleteLink } from '../apiHandler/api-calls'
import '../App.css'
import { useGlobalContext } from '../context'

const SingleLink = ({ shortURL, longURL, qrCode }) => {
    const apiURL = 'https://shrtn.onrender.com/v/'
    const { links, setLinks } = useGlobalContext()
    const handleDelete = (e) => {
        const shortURL = e.currentTarget.id
        apiDeleteLink(shortURL)
        let newLinks = links.filter((link) => {
            if (link.shortURL !== shortURL) {
                return link
            }
        })
        setLinks(newLinks)
    }

    return (
        <section className="single-link">
            <div className="links">
                <div className="long-url">
                    <a href={longURL}>{longURL}</a>
                </div>

                <div className="arrow">
                    <FaArrowAltCircleDown />
                </div>

                <div className="url-copy">
                    <div className="short-url">
                        <a href={`${apiURL}${shortURL}`}>
                            shrtn.onrender.com/v/{shortURL}
                        </a>
                    </div>
                    <button
                        className="copy"
                        value={`${apiURL}${shortURL}`}
                        onClick={(e) => {
                            navigator.clipboard.writeText(e.currentTarget.value)
                        }}
                    >
                        <FaCopy />
                    </button>
                </div>
            </div>

            <div className="qrcode">
                <img src={qrCode} alt="qrcode" />
            </div>
            <button
                id={shortURL}
                onClick={(e) => handleDelete(e)}
                className="delete-button"
            >
                <FaTimes />
            </button>
        </section>
    )
}

export default SingleLink
