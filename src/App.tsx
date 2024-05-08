import Header from './components/Header'
import './App.css'
import BCMainSectionPage from './components/BrowseCompaniesPage/BCompaniesMainSectionPage'
import RCompaniesSectionPage from './components/BrowseCompaniesPage/RCompaniesSectionPage'
function App() {

  return (
    <>
        <Header/>
        <BCMainSectionPage/>
        <RCompaniesSectionPage/>
    </>
  )
}

export default App
