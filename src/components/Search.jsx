import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import '../Search.css';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../contextApi/StateProvider';
import { actionType } from '../contextApi/reducer';

function Search({ hiddenButtons }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const history = useHistory();

  const google_search = (e) => {
    e.preventDefault();
    console.log('>>>>>>>>>>>>>>>search icon');

    dispatch({
      type: actionType.SET_SEARCH_TERM,
      term: input,
    });

    history.push('/search');
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon onClick={google_search} className="search__inputIcon" />
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search__MicIcon" />
      </div>
      {hiddenButtons ? (
        <div className="search__buttonContainer">
          <Button type="submit" onClick={google_search} variant="outlined" className="button">
            Google Search
          </Button>
          <Button variant="outlined" className="button">
            I'm Feeling Lucky
          </Button>
        </div>
      ) : (
        <div className="search__buttonContainer hide">
          <Button type="submit" onClick={google_search} variant="outlined" className="button">
            Google Search
          </Button>
          <Button variant="outlined" className="button">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
