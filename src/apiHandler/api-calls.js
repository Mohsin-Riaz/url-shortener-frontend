import axios from 'axios'
const apiURL = 'https://shrtn.onrender.com/v/'
export const apiCreateLink = (longURL, shortURL, qrCode) => {
    axios(
        {
            method: 'post',
            url: apiURL + shortURL,
            data: { longURL: longURL, shortURL: shortURL, qrCode: qrCode },
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).catch((err) => console.log(err))
}

export const apiGetLinks = () => {
    return new Promise((resolve, reject) => {
        axios(
            {
                method: 'get',
                url: apiURL,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then((response) => {
                resolve(response.data.data)
            })
            .catch((err) => console.log(err))
    })
}

export const apiDeleteLink = (shortURL) => {
    axios(
        {
            method: 'delete',
            url: apiURL,
            data: { shortURL: shortURL },
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    ).catch((err) => console.log(err))
}
