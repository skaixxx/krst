import React from 'react';
import { BrowserRouter} from 'react-router';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header'
import AppRoutes from './routes/routes';
import LocationRoutes from './routes/LocationRoutes';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
          <Header/>
            {/* <LocationRoutes/> */}
            <AppRoutes/>
          <Footer/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
