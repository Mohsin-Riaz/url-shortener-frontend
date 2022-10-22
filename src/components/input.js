import { customRandom, urlAlphabet } from 'nanoid'
import { toDataURL } from 'qrcode'
import React, { useRef } from 'react'
import { apiCreateLink } from '../apiHandler/api-calls'
import '../App.css'
import { useGlobalContext } from '../context'

const Input = () => {
    const { setShortURL, links, setLinks } = useGlobalContext()
    const inputRef = useRef()

    function handleSubmit(e) {
        e.preventDefault()

        const urlValue = inputRef.current.value
        setShortURL(urlValue)
        if (urlValue === '') {
            return
        }

        let randomString = Math.round(+new Date() * Math.random()).toString(36)
        generateQR(randomString)
            .then((newQR) => {
                apiCreateLink(urlValue, randomString, newQR)

                setLinks([
                    ...links,
                    {
                        longURL: urlValue,
                        shortURL: randomString,
                        qrCode: newQR,
                    },
                ])
            })
            .catch((err) => console.log({ Error: err }))
    }

    const generateQR = async (shortURL) => {
        try {
            let qr = await toDataURL(`https://shrtn.onrender.com/v/${shortURL}`)
            return qr
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="label">Address </div>
                <input
                    type="url"
                    ref={inputRef}
                    placeholder="e.g. http://www.google.com"
                    className="input"
                    required
                ></input>
                <button className="btn" type="submit">
                    submit
                </button>
            </form>
        </>
    )
}

export default Input
