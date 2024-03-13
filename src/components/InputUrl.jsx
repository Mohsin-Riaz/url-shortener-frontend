import React, { useRef, useState } from 'react';
import { apiCreateLink } from '../api/mongo';
// import { apiCreate } from '../api/postgres';

const InputUrl = ({ addNewLink }) => {
    const [longURL, setLongURL] = useState('');

    async function submitHandler(params) {
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
        if (longURL === '') return;
        if (e.key !== 'Enter') return;
        submitHandler();
    }

    function buttonHandler(e) {
        e.preventDefault();
        if (longURL === '') return;
        submitHandler();
    }

    return (
        <>
            <form className="input-form">
                <div className="label bxshadow">
                    <p>Address</p>
                </div>
                <input
                    type="text"
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
                    onClick={buttonHandler}
                >
                    submit
                </button>
            </form>
        </>
    );
};

export default InputUrl;
