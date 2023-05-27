import "./news.css"
import React, { useState, useEffect } from 'react'
export default function NewsApp() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('india');
  

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const apiKey = '8a6555f0a8ba42729607ca970501ce0b';
      const url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}&sortBy=publishedAt`;
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
      console.log(data);
      console.log(searchQuery);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchNews();
  };

  return (
    <>
      <nav>
        <h1>ConnectedCommunity</h1>
        <form onSubmit={handleSearchSubmit} className="search-container">
          <input type="text" placeholder="Search" value={searchQuery} onChange={handleSearchChange} />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="card-container">
        {news.map((article, index) => (
          <div className="card" key={index}>
            <h2 className="card-title">{article.title}</h2>
            <p className="card-date">{formatDateTime(article.publishedAt)}</p>
            {article.urlToImage && <img className="card-image" src={article.urlToImage} alt={article.title} />}
            <p className="card-description">{article.description}</p>
            <a className="card-link" href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </>
  );
}


