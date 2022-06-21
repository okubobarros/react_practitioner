import './index.css'
import Home from './views/Home'
import About from './views/About'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;


// **********aqui vamos jogar as paginas da View **************