// ./packages/client/src/App.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const { data: resultList } = await axios.get('/api/list');
            setList(resultList);

            const { data: result } = await axios.get('/api/item');
            setItem(result);
        })();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <div>List</div>
                {list.map((item, idx) => (
                    <div key={idx}>{`${item.id}/${item.name}`}</div>
                ))}

                <div>item</div>
                <div>{`${item.id}/${item.name}`}</div>
            </header>

        </div>
    );
}

export default App;