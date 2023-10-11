import { useEffect, useState } from 'react';
import './App.css';
import { apiGetAll } from './api/postgres';
import InputUrl from './components/InputUrl';
import Loading from './components/Loading';
import ShortenedLinks from './components/ShortenedLinks';

function App() {
    const [links, setLinks] = useState([
        // {
        //     id: 1,
        //     long_url: 'http://google.ca',
        //     short_url: 'placeholder',
        //     created_at: '1984-02-01',
        // },
        // {
        //     id: 1,
        //     long_url: 'http://google.ca',
        //     short_url: 'placeholder',
        //     created_at: '1984-02-01',
        // },
    ]);
    const [loading, setLoading] = useState(false);
    function addNewLink(newLink) {
        setLinks([...links, newLink]);
    }

    function deleteLink(short_url) {
        setLinks(() => links.filter((link) => link.short_url !== short_url));
    }

    useEffect(() => {
        (async function () {
            const newLinks = await apiGetAll();
            if (newLinks.success === true) {
                setLinks(newLinks.data);
                setLoading(false);
            }
        })();
    }, []);

    if (loading)
        return (
            <main className="container">
                <header>Url Shortener</header>
                <Loading />
            </main>
        );

    return (
        <main className="container">
            <header className="App-header">Url Shortener</header>
            <InputUrl addNewLink={addNewLink} />
            {!!links ? (
                <ShortenedLinks links={links} deleteLink={deleteLink} />
            ) : (
                <Loading />
            )}
        </main>
    );
}

export default App;
