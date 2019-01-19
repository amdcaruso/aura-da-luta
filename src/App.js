import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fale conosco no facebook messenger <a href="https://m.me/auradaluta" class="button">aqui</a>
            <br />
            Fale sua pergunta para o nosso chat bot abaixo!
          </p>

          <iframe
            allow="microphone;"
            width="350"
            height="330"
            src="https://console.dialogflow.com/api-client/demo/embedded/auradaluta">
          </iframe>
          <br />
          Não tem palavras pra descrever a capacidade e poder do coletivo feminino ♥
        </header>
      </div >
    );
  }
}

export default App;
