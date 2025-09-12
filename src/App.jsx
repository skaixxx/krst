import React from 'react';
import { BrowserRouter, HashRouter as Router} from 'react-router';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header'
import AppRoutes from './routes/routes';
import { PopupProvider } from './components/popup/popupContext';
import PopUp from './components/popup/popup';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <PopupProvider>
            <Header/>
              <AppRoutes/>
            <Footer/>
            <PopUp/>
        </PopupProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
