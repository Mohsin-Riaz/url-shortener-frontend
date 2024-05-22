import React, { useRef, useState } from 'react';
import { apiCreateLink } from '../api/mongo';
// import { apiCreate } from '../api/postgres';  ## For postgresql

const InputUrl = ({ addNewLink }) => {
    const [longURL, setLongURL] = useState('');

    async function submitHandler() {
        if (longURL === '') return;
        if (!isValidHttpUrl(longURL)) return;

        let randomString = Math.round(+new Date() * Math.random()).toString(36);

        const responseObject = await apiCreateLink({
            long_url: longURL,
            short_url: randomString,
        });
        if (responseObject.success) {
            addNewLink({ ...responseObject.data.data, animation: true });
            setLongURL('');
        }
        return;
    }

    function keyPressHandler(e) {
        e.preventDefault();
        if (e.key !== 'Enter') return;
        submitHandler();
    }

    function buttonHandler(e) {
        e.preventDefault();
        submitHandler();
    }

    function isValidHttpUrl(string) {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            alert('Not a valid URL\nValid URL format is: http://...');
            return false;
        }

        return url.protocol === 'http:' || url.protocol === 'https:';
    }

    return (
        <>
            <div className="input-form" onSubmit={false}>
                <div className="label bxshadow">
                    <p>Address</p>
                </div>
                <input
                    type="url"
                    placeholder="e.g. http://www.google.com"
                    className="input bxshadow"
                    onKeyUp={(e) => keyPressHandler(e)}
                    onChange={(e) => setLongURL(e.currentTarget.value)}
                    value={longURL}
                    required
                />
                <button
                    className="btn bxshadow"
                    type="button"
                    onClick={(e) => buttonHandler(e)}
                >
                    submit
                </button>
            </div>
        </>
    );
};

export default InputUrl;
