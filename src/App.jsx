import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen'
import NavBar from './components/NavBar/NavBar'
import AboutMePage from './components/AboutMe/AboutMe'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import './App.css'


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about-me" element={<AboutMePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
