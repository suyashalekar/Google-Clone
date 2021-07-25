import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useStateValue } from '../contextApi/StateProvider';
import Response from '../response';
import '../SearchPage.css';
import useGoogleSearch from '../useGoogleSearch';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import MapIcon from '@material-ui/icons/Map';
import ImageIcon from '@material-ui/icons/Image';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // live API
  const { data } = useGoogleSearch(term);

  // const data = Response;
  console.log('>>>>>>>>>> data', data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="google.png"
            srcset=""
          />
        </Link>
        <div className="searchPage__searchBody">
          <Search />
          {/* <div className="searchPage__options">
            <div className="searchPage__options-left">
              <div className="searchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
            </div>
            <div className="searchPage__options-right"></div>
          </div> */}
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultsCount">
            About {data?.searchInformation.formattedTotalResults} result (
            {data?.searchInformation.formattedSearchTime} second) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.displayLink}
              </a>
              <a className="searchPage__resultsTitle" href={item.link}>
                <h3> {item.title}</h3>
              </a>
              <p className="searchPage__resultsSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
