import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/Main/MainContent';
import Footer from './components/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;