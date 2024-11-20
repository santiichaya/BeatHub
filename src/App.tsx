import "./style/App.css";
/* import {Song} from './components/Song.tsx' */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage.tsx";
import Header from "./components/Header.tsx";
import { ContainerPlayList } from "./components/ContainerPlayList.tsx";
import { Display } from "./pages/Display.tsx";

function App() {
  return (
    <>
      <Router>
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/UserPage" element={<UserPage/>} />
          <Route path="/" element={<ContainerPlayList ids={[1,2]} />} />
          <Route path="/Playlist/:id" element={<Display />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
