import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import HomePage from './pages/home/Home'
import GrafikPage from './pages/btcgrafik/Btcgrafik'
import BorsaPage from './pages/borsa/Borsa'
import AboutPage from './pages/about/About'
import ContactPage from './pages/contact/Contact'
import LoginPage from './pages/login/Login'
import PaypalPage from './pages/paypal/Paypal'
function App() {
  return (
    <>
      
        <Router>
          <Header />
          <main className='main-home'>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path='/grafik' element={<GrafikPage />} />
            <Route exact path='/borsa' element={<BorsaPage />} />
            <Route exact path='/about' element={<AboutPage />} />
            <Route exact path='/contact' element={<ContactPage />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/payment' element={<PaypalPage />} />
          </Routes>
          </main>
          <Footer />
        </Router>

    </>
  )
}

export default App
