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
        if (urlValue === '') {
            return
        }
        setShortURL(urlValue)

        let randomString = Math.round(+new Date() * Math.random()).toString(36)
        generateQR(randomString)
            .then((newQR) => {
                apiCreateLink(urlValue, randomString, newQR)

                setLinks([
                    {
                        longURL: urlValue,
                        shortURL: randomString,
                        qrCode: newQR,
                    },
                    ...links,
                ])
            })
            .catch((err) => console.log({ Error: err }))
    }

    const generateQR = async (shortURL) => {
        try {
            let qr = await toDataURL(`${process.env.BACKEND_URL}${shortURL}`)
            return qr
        } catch (err) {
            console.log(err)
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
