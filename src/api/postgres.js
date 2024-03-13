import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// axios.defaults.baseURL = 'https://shrtn.onrender.com';

export const apiCreate = async ({ long_url, short_url }) => {
    const link = await axios.post('/post', { long_url, short_url });
    if (link.data.success === false)
        return console.log(`Error: link not created`);
    return link.data.data;
};

export const apiGet = async (id) => {
    const link = await axios.get(`/v/${id}`);
    if (link.data.success === false)
        return console.log(`Error: couldn't get link`);
    return link.data;
};

export const apiGetAll = async () => {
    const link = await axios.get(`/get/`);
    if (link.data.success === false)
        return console.log(`Error: couldn't get links`);
    return link.data;
};

export const apiDelete = async (id) => {
    const link = await axios.delete(`/delete/${id}`);
    if (link.data.success === false)
        return console.log(`Error: link not deleted`);
    return link.data;
};
