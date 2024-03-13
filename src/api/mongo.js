import axios from 'axios';

const apiURL = 'https://shrtn.onrender.com';

axios.defaults.baseURL = apiURL;

export const apiGetLinks = async () => {
    const response = await axios(
        {
            method: 'get',
            url: apiURL + '/get/',
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data;
};

export const apiCreateLink = async ({ long_url, short_url }) => {
    const response = await axios(
        {
            method: 'post',
            url: apiURL + '/post',
            data: { long_url: long_url, short_url: short_url },
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
    return response.data;
};

export const apiDeleteLink = async (short_url) => {
    const response = await axios(
        {
            method: 'delete',
            url: apiURL + `/v/${short_url}`,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response;
};
