import Home from './views/Home'
import Footer from './components/Footer/index.js'
import Header from './components/Header/index.js'
import Navbar from './components/Navbar/Navbar.js'

import './index.css'


function App() {
  return (

    <>
      <Navbar />
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App;
