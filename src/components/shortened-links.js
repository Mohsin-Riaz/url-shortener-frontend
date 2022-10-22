import React from 'react'

import '../App.css'
import { useGlobalContext } from '../context'
import Loading from './loading'
import SingleLink from './single-link'

const ShortenedLinks = () => {
    const { shortURL, links, loading } = useGlobalContext()

    if (loading) {
        return (
            <section className="links-section">
                <Loading />
            </section>
        )
    } else if (!loading && !links?.length) {
        return (
            <section className="links-section">
                <h1>Enter an address to create the first link!</h1>
            </section>
        )
    }

    return (
        <section key={shortURL} className="links-section">
            {links &&
                links.map((item) => {
                    return <SingleLink key={shortURL} {...item} />
                })}
        </section>
    )
}

export default ShortenedLinks
