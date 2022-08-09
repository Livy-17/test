import React from 'react';
import { useState } from 'react';
import './Style.css';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Redirect from './components/Body/Redirect';

function App() {

  const [redirect, setRedirect] = useState(false);

  return (
    <div className="App">
      <Navbar />
      {redirect ? 
        <Redirect />
          :
        <Body setRedirect={setRedirect} />
      }
      <Footer />
    </div>
  );
}

export default App;
