import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Assurez-vous que le chemin d'importation est correct
import { Container } from '@mui/material';
import HomePage from './components/HomePage';
import Login from './components/Login';
import BrowseCompanies from './components/BrowseCompanies';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse-companies" element={<BrowseCompanies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
