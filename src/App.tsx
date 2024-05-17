import Header from './components/Header'
import './App.css'
import SearchCompaniesMainSectionPage from './components/SearchCompaniesResultPage/BrowseCompaniesMainSectionPage'
import SearchCompaniesFilterSectionPage from './components/SearchCompaniesResultPage/SearchCompaniesFilterSectionPage'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <Header/>
        <SearchCompaniesMainSectionPage/>
        <SearchCompaniesFilterSectionPage/>
        <Footer/>
    </>
  )
}

export default App