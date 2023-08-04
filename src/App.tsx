import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Bored } from "./components/Bored";

function App() {
  return (
      <main className="container" style={styleApp}>
          <Header />
          <Bored />
          <Footer />
      </main>
  );
}

export default App;

const styleApp = {
    display: 'flex',
    flexDirection: 'column' as 'row',
    height: '100vh'
}

