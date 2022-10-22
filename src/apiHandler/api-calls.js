import axios from 'axios'

const apiURL = 'https://shrtn.onrender.com/v/'
axios.defaults.baseURL = apiURL

export const apiGetLinks = async () => {
    const response = await axios(
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

    return response.data.data
}

export const apiCreateLink = async (longURL, shortURL, qrCode) => {
    const response = await axios(
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
    )
    return response
}

export const apiDeleteLink = async (shortURL) => {
    const response = await axios(
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
    )

    return response
}
