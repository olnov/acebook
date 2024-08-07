import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchResults } from '../../services/users';
import { SearchResults } from '../../components/Search/SearchResults';
import { TopBarGroup } from '../../components/TopBarGroup/TopBarGroup';
// import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

export const SearchResultsPage = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();

  // Extract query parameter from the URL
    const query = new URLSearchParams(location.search).get('q');

    useEffect(() => {
    if (query) {
        fetchData(query);
    }
    }, [query]);

    const fetchData = async (searchQuery) => {
    setIsLoading(true);
    try {
        const data = await searchResults(searchQuery);
        setResults(data.users);
    } catch (error) {
        console.error('Failed to fetch search results:', error);
    } finally {
        setIsLoading(false);
    }
};

    return (
    <>
    <TopBarGroup />
    <div className='search-results'>
        <h3>Search Results for: {query}</h3>
        {isLoading ? (
        <p>Loading...</p>
        ) : (
        <SearchResults results={results} />
        )}
    </div>
    <Footer />
    </>
    );
};

export default SearchResultsPage;
