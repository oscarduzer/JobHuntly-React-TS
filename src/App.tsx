import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/PageUtils/NavBar'; // Assurez-vous que le chemin d'importation est correct
import { Container } from '@mui/material';
import FindJobs from './components/FindJobs/FindJobs';
import Footer from './components/PageUtils/Footer';
import LandingPage from './components/LandingPage/LandingPage';


const App = () => {
  return (<>
  <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Find-Jobs" element={<FindJobs />} />
        </Routes>
      </Container>
    </Router>
    <Footer></Footer>
  </>
    
  );
};

export default App;
