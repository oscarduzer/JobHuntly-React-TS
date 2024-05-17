import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import FindJobs from './components/FindJobs';
import BrowseCompanies from './components/BrowseCompanies';
import CompanyPage from './components/CompanyPage';

function App() {

  return (
    <>
        <Header/>
              <Router>
                    <Routes>
                          <Route path="/" Component={LandingPage}/>
                          <Route path="/FindJobs" Component={FindJobs}/>
                          <Route path="/BrowseCompanies" Component={BrowseCompanies}/>
                          <Route path="/Company" Component={CompanyPage}/>
                    </Routes>
              </Router>
        <Footer/>
    </>
  )
}

export default App