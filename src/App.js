import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Main/Home';
import Sobre from './Components/About/About';
import NotFound from './Components/NotFound';
import { Provider } from 'react-redux';
import store from './store/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="sobre" element={<Sobre />} />
              <Route path="contato" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
