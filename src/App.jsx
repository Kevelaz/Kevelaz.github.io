import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen'
import NavBar from './components/NavBar/NavBar'
import AboutMePage from './components/AboutMe/AboutMe'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import BackgroundVideo from './components/BackgroundVideo/BackgroundVideo';
import ContactInfo from './components/ContactInfo/ContactInfo';
import './App.css'

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

function App() {
  const location = useLocation()
  
  const showNavBar = location.pathname !== '/';
  return (
    <>
      <BackgroundVideo />
      {showNavBar && <NavBar />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact-me" element={<ContactInfo />} />
      </Routes>
    </>
  );
}

export default AppWrapper