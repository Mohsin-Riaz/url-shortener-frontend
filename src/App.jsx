import { useEffect, useState } from 'react';
import './App.css';
// import { apiGetAll } from './api/postgres';  ## For postgresql
import { apiGetLinks } from './api/mongo';
import InputUrl from './components/InputUrl';
import Loading from './components/Loading';
import ShortenedLinks from './components/ShortenedLinks';

function App() {
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    function addNewLink(newLink) {
        setLinks([...links, newLink]);
    }

    function deleteLink(short_url) {
        setLinks(() => links.filter((link) => link.short_url !== short_url));
    }

    useEffect(() => {
        (async function () {
            const newLinks = await apiGetLinks();
            if (newLinks.success === true) {
                setLinks(newLinks.data.reverse());
                setLoading(false);
            }
        })();
    }, []);

    if (loading)
        return (
            <main className="container">
                <header className="App-header">Url Shortener</header>
                <InputUrl addNewLink={addNewLink} />
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
