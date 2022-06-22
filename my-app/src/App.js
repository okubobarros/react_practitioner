import './index.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/ContactUs'

import { Routes, Route } from "react-router-dom"


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App;
