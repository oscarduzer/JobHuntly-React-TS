import BrowseCompaniesMainSectionPage from "./BrowseCompaniesPage/BrowseCompaniesMainSectionPage";
import CompaniesFilterSectionPage from "./BrowseCompaniesPage/CompaniesFilterSectionPage";
import RecommendedCompaniesSectionPage from "./BrowseCompaniesPage/RecommendedCompaniesSectionPage";


export default function BrowseCompanies()
{
    return (
        <>
            <BrowseCompaniesMainSectionPage/>
            <RecommendedCompaniesSectionPage/>
            <CompaniesFilterSectionPage/>
        </>
    )
}