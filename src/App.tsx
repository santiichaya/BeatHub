import "./style/App.css";
/* import {Song} from './components/Song.tsx' */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage.tsx";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/search">Buscar Canciones</Link>
          <Link to="/userpage">Perfil</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/userpage" element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
