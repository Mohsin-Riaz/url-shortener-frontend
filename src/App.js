import './App.css'
import Input from './components/input'
import ShortenedLinks from './components/shortened-links'

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h3>URL SHORTENER</h3>
                </header>
            </div>
            <div>
                <Input />
                <ShortenedLinks />
            </div>
        </>
    )
}

export default App
