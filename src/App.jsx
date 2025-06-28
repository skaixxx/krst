import React from 'react';
import { BrowserRouter} from 'react-router';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header'
import AppRoutes from './routes/routes';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
          <Header/>
            <AppRoutes/>
          <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
