import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBarGroup from "../../components/TopBarGroup";
import "./style.css";

const ResultsPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    if (query) {
      // Fetch search results from the backend
      fetch(`/api/search?query=${encodeURIComponent(query)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            setError("No results found.");
          } else {
            setResults(data);
            setError("");
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Error fetching search results.");
        });
    }
  }, [location.search]);

  return (
    <div className="results-page">
      <TopBarGroup
        block="https://c.animaapp.com/M2klh9T2/img/block-2.svg"
        headerClassName="top-bar-group-instance"
        property1="default"
      />
      <div className="results-content">
        <div className="filter-sidebar">
          <h2>Search Filters</h2>
          <p>No filters available</p>
        </div>
        <div className="results-container">
          <h2>Search Results</h2>
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <div className="results-list">
              {results.map((result) => (
                <div key={result._id} className="result-item">
                  <p>{result.full_name}</p>
                  <p>{result.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
