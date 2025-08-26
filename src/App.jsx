import React from 'react';
import { HashRouter as Router} from 'react-router';
import Footer from './components/Footer/footer';
import Header from './components/Header/Header'
import AppRoutes from './routes/routes';

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Header/>
            <AppRoutes/>
          <Footer/>
      </Router>
    </React.StrictMode>
  );
}

export default App;
