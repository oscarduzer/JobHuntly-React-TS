import Header from './components/Header'
import './App.css'
import BrowseCompaniesMainSectionPage from './components/BrowseCompaniesPage/BrowseCompaniesMainSectionPage'
import RecommendedCompaniesSectionPage from './components/BrowseCompaniesPage/RecommendedCompaniesSectionPage'
import CompaniesFilterSectionPage from './components/BrowseCompaniesPage/CompaniesFilterSectionPage'
function App() {

  return (
    <>
        <Header/>
        <BrowseCompaniesMainSectionPage/>
        <RecommendedCompaniesSectionPage/>
        <CompaniesFilterSectionPage/>
    </>
  )
}

export default App
