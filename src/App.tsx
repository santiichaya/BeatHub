import './style/App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import UserPage from './pages/UserPage';

function App() {

  return (
    <>
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/search">Buscar Canciones</Link>
      </nav>
  
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App