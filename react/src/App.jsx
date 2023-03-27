import './App.scss'
import { Nav, Footer } from './components'
import {MainPage, ContactPage, InfoPage, NotFoundPage} from './pages';
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Info" element={<InfoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>    
  )
}

export default App
