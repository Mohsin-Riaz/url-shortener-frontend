import React from 'react'
import { useGlobalContext } from '../context'
import '../css/shortened-links.css'

import SingleLink from './single-link'

const ShortenedLinks = () => {
    const { shortURL, links } = useGlobalContext()

    return (
        <section key={Math.random()} className="links-section">
            {links &&
                links.map((item) => {
                    return <SingleLink key={shortURL} {...item} />
                })}
        </section>
    )
}

export default ShortenedLinks
