import React from 'react';
import './index.css';
import iconDevelopment from "./icon_cat.png";
import './App.css';

class App extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.hideLoader();
        }, 2000)
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={iconDevelopment} className="App-logo" alt="logo" />
                    <div
                        className="App-header-text"
                        >
                        <text>Mohon Maaf Situs</text>
                        <text className="App-bold"> Tetikoes.com</text>
                    </div>
                    <text>Sedang Dalam Pengerjaan</text>
                    <a
                        className="App-button"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://linktr.ee/tetikoesstudio">
                            <text
                                className="App-button-text"
                                rel="noopener noreferrer"
                                >
                                Pemesanan dapat melalui
                            </text>
                            <text
                                className="App-button-text-bold"> linktr.ee/tetikoesstudio</text> 
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
