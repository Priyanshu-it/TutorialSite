import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sections from './components/Sections';
import ChatBox from './components/ChatBox';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Sections />
      </main>
      <Footer />
      <ChatBox />
    </>
  );
}

export default App;
