import React from 'react';
import { BrowserRouter} from 'react-router';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header'
import AppRoutes from './routes/routes';
import { DataProvider } from './routes/DataContext';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
          <Header/>
          <DataProvider>
            <AppRoutes/>
          </DataProvider>
          <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
